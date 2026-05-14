@echo off
cd /d "%~dp0"
git add .
git commit -m "feat(admin): drag-drop, tilfoej og slet opgaver"
echo Committed!
