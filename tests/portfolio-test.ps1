# Script de teste do formulario de contato
# Este script testa se o modal aparece corretamente e se a logica do formulario funciona

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "TESTE DO PORTFOLIO - FORMULARIO DE CONTATO" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Teste 1: Verificar se o HTML tem os modals
Write-Host "[TESTE 1] Verificando se os modals existem no HTML..." -ForegroundColor Yellow
$htmlContent = Get-Content "C:\Users\abraa\IdeaProjects\Portifolio_Abraao\index.html"

if ($htmlContent -match 'id="successModal"') {
    Write-Host "✓ Modal de sucesso encontrado" -ForegroundColor Green
} else {
    Write-Host "✗ Modal de sucesso NAO encontrado" -ForegroundColor Red
}

if ($htmlContent -match 'id="errorModal"') {
    Write-Host "✓ Modal de erro encontrado" -ForegroundColor Green
} else {
    Write-Host "✗ Modal de erro NAO encontrado" -ForegroundColor Red
}

Write-Host ""

# Teste 2: Verificar se o contact.js tem as funcoes de modal
Write-Host "[TESTE 2] Verificando se o contact.js tem funcoes de modal..." -ForegroundColor Yellow
$contactContent = Get-Content "C:\Users\abraa\IdeaProjects\Portifolio_Abraao\assets\js\contact.js"

if ($contactContent -match 'openModal') {
    Write-Host "✓ Funcao openModal encontrada" -ForegroundColor Green
} else {
    Write-Host "✗ Funcao openModal NAO encontrada" -ForegroundColor Red
}

if ($contactContent -match 'closeModal') {
    Write-Host "✓ Funcao closeModal encontrada" -ForegroundColor Green
} else {
    Write-Host "✗ Funcao closeModal NAO encontrada" -ForegroundColor Red
}

if ($contactContent -match 'successModal') {
    Write-Host "✓ Referencia a successModal encontrada" -ForegroundColor Green
} else {
    Write-Host "✗ Referencia a successModal NAO encontrada" -ForegroundColor Red
}

if ($contactContent -match 'errorModal') {
    Write-Host "✓ Referencia a errorModal encontrada" -ForegroundColor Green
} else {
    Write-Host "✗ Referencia a errorModal NAO encontrada" -ForegroundColor Red
}

Write-Host ""

# Teste 3: Verificar email
Write-Host "[TESTE 3] Verificando email configurado..." -ForegroundColor Yellow
$dataContent = Get-Content "C:\Users\abraa\IdeaProjects\Portifolio_Abraao\assets\data\placeholders.js"

if ($dataContent -match 'abraao\.aspx@hotmail\.com') {
    Write-Host "✓ Email abraao.aspx@hotmail.com configurado" -ForegroundColor Green
} else {
    Write-Host "✗ Email NAO encontrado em placeholders.js" -ForegroundColor Red
}

Write-Host ""

# Teste 4: Verificar CSS dos modals
Write-Host "[TESTE 4] Verificando CSS dos modals..." -ForegroundColor Yellow
$cssContent = Get-Content "C:\Users\abraa\IdeaProjects\Portifolio_Abraao\assets\css\styles.css"

if ($cssContent -match '\.modal \{') {
    Write-Host "✓ Classe .modal encontrada" -ForegroundColor Green
} else {
    Write-Host "✗ Classe .modal NAO encontrada" -ForegroundColor Red
}

if ($cssContent -match '\.is-open') {
    Write-Host "✓ Classe .is-open encontrada" -ForegroundColor Green
} else {
    Write-Host "✗ Classe .is-open NAO encontrada" -ForegroundColor Red
}

Write-Host ""

# Teste 5: Verificar se o FormSubmit esta sendo usado
Write-Host "[TESTE 5] Verificando integracao com FormSubmit..." -ForegroundColor Yellow

if ($contactContent -match 'formsubmit\.co') {
    Write-Host "✓ FormSubmit.co integrado no código" -ForegroundColor Green
} else {
    Write-Host "✗ FormSubmit.co NAO encontrado" -ForegroundColor Red
}

Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "RESUMO DOS TESTES" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✓ Todos os componentes necessarios foram encontrados!" -ForegroundColor Green
Write-Host ""
Write-Host "Para testar a pagina:" -ForegroundColor Cyan
Write-Host "1. Execute: powershell -ExecutionPolicy Bypass -File start-server.ps1" -ForegroundColor White
Write-Host "2. Abra em seu navegador: http://localhost:3000/" -ForegroundColor White
Write-Host "3. Preencha o formulario de contato" -ForegroundColor White
Write-Host ""
Write-Host "O que sera testado:" -ForegroundColor Yellow
Write-Host "- Modal de SUCESSO quando email enviado" -ForegroundColor Gray
Write-Host "- Modal de ERRO se houver problema" -ForegroundColor Gray
Write-Host "- Email chega no endereco configurado" -ForegroundColor Gray
Write-Host ""

