@echo off
REM Servidor local para testar o portfolio
REM NÃO REQUER NODE.JS - USA POWERSHELL NATIVO DO WINDOWS

REM Mudar para a pasta do projeto
cd /d "%~dp0"

REM Aguardar 2 segundos
timeout /t 2 /nobreak

REM Abrir o navegador
start http://localhost:3000/

REM Iniciar servidor PowerShell (nativo do Windows)
powershell -ExecutionPolicy Bypass -File start-server.ps1

pause

