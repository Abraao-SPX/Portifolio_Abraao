$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$requiredFiles = @(
  'index.html',
  'assets/data/placeholders.js',
  'assets/css/reset.css',
  'assets/css/styles.css',
  'assets/css/responsive.css',
  'assets/js/main.js',
  'assets/js/animations.js',
  'assets/js/contact.js'
)

$missing = @()
foreach ($relativePath in $requiredFiles) {
  $fullPath = Join-Path $root $relativePath
  if (-not (Test-Path $fullPath)) {
    $missing += $relativePath
  }
}

if ($missing.Count -gt 0) {
  Write-Error ('Arquivos faltando: ' + ($missing -join ', '))
}

$dataFile = Join-Path $root 'assets/data/placeholders.js'
$dataContent = Get-Content -Path $dataFile -Raw
if ($dataContent -notmatch 'const\s+portfolioData\s*=') {
  Write-Error 'placeholders.js nao contem a estrutura portfolioData esperada.'
}

Write-Output 'Smoke test OK: estrutura principal do portfolio encontrada.'

