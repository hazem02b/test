@echo off
echo ========================================
echo   INSTALLATION ET DEMARRAGE FORSTEK
echo ========================================
echo.

REM Vérifier si node_modules existe
if not exist "node_modules" (
    echo [ETAPE 1/3] Installation des dependances...
    echo Cette operation peut prendre 2-3 minutes la premiere fois.
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERREUR: L'installation a echoue!
        echo Verifiez que Node.js est installe: node --version
        pause
        exit /b 1
    )
    echo.
    echo Installation terminee avec succes!
) else (
    echo [ETAPE 1/3] Dependances deja installees (node_modules trouve)
)

echo.
echo [ETAPE 2/3] Verification de la configuration...
echo.

echo [ETAPE 3/3] Demarrage du serveur de developpement...
echo.
echo Le site sera accessible sur: http://localhost:3000
echo.
echo IMPORTANT: Ne fermez pas cette fenetre!
echo Pour arreter le serveur, appuyez sur Ctrl+C
echo.
echo ========================================
echo.

call npm run dev
