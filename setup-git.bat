@echo off
cd /d "%~dp0"
git init
git add .
git commit -m "feat: initial SmartPack prisoversigt med admin-panel"
echo.
echo Git repo oprettet!
echo.
echo Naeste trin - push til GitHub:
echo   1. Opret et nyt repo paa https://github.com/new
echo   2. Koer: git remote add origin https://github.com/DIT-BRUGERNAVN/smartpack-priser.git
echo   3. Koer: git push -u origin main
pause
