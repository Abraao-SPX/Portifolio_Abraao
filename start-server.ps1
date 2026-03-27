# Servidor HTTP simples em PowerShell puro
# Nao precisa instalar nada

$port = 3000
$rootPath = (Get-Location).Path
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
  $listener.Start()
  Write-Host "Servidor rodando em http://localhost:$port/" -ForegroundColor Green
  Write-Host "Pressione CTRL+C para parar." -ForegroundColor Yellow

  $mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "text/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
  }

  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    try {
      $url = $request.Url.LocalPath
      if ($url -eq "/") {
        $url = "/index.html"
      }

      $relativePath = $url.TrimStart("/")
      $relativePath = [System.Uri]::UnescapeDataString($relativePath)

      $filePath = [System.IO.Path]::GetFullPath((Join-Path $rootPath $relativePath))
      $rootFullPath = [System.IO.Path]::GetFullPath($rootPath)

      if (-not $filePath.StartsWith($rootFullPath, [System.StringComparison]::OrdinalIgnoreCase)) {
        $response.StatusCode = 403
        $response.ContentType = "text/plain; charset=utf-8"
        $forbidden = [System.Text.Encoding]::UTF8.GetBytes("403 - Acesso negado")
        $response.ContentLength64 = $forbidden.Length
        $response.OutputStream.Write($forbidden, 0, $forbidden.Length)
        continue
      }

      if (Test-Path $filePath -PathType Leaf) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()

        $contentType = $mimeTypes[$ext]
        if (-not $contentType) {
          $contentType = "application/octet-stream"
        }

        $response.ContentType = $contentType
        $response.ContentLength64 = $content.Length
        $response.OutputStream.Write($content, 0, $content.Length)
      }
      else {
        $response.StatusCode = 404
        $response.ContentType = "text/html; charset=utf-8"
        $notFound = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 - Arquivo nao encontrado</h1>")
        $response.ContentLength64 = $notFound.Length
        $response.OutputStream.Write($notFound, 0, $notFound.Length)
      }
    }
    finally {
      $response.OutputStream.Close()
      $response.Close()
    }
  }
}
catch {
  Write-Host "Erro: $_" -ForegroundColor Red
}
finally {
  if ($listener) {
    $listener.Close()
    $listener.Dispose()
  }
}

