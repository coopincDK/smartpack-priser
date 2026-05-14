@echo off
cd /d "%~dp0"
git add .
git commit -m "feat: static GitHub Pages build i docs/"
git push
echo Done!
