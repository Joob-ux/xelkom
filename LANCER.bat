@echo off
title Xelkom Valley - Lancement automatique
color 0A
echo.
echo  =============================================
echo    XELKOM VALLEY - Installation et Lancement
echo  =============================================
echo.

echo [1/4] Installation des dependances backend...
cd /d "%~dp0server"
call npm install
echo  OK - Backend installe
echo.

echo [2/4] Installation des dependances frontend...
cd /d "%~dp0client"
call npm install
echo  OK - Frontend installe
echo.

echo [3/4] Demarrage du serveur Node.js (port 3001)...
cd /d "%~dp0server"
start "Backend Xelkom Valley" cmd /k "node index.js"
timeout /t 3 /nobreak >nul

echo [4/4] Demarrage de React (port 5173)...
cd /d "%~dp0client"
start "Frontend Xelkom Valley" cmd /k "npm run dev"
timeout /t 5 /nobreak >nul

echo.
echo  Ouverture du navigateur...
start http://localhost:5173

echo.
echo  =============================================
echo   Site disponible sur http://localhost:5173
echo  =============================================
echo.
pause
