@echo off
echo Starting The Velvet Pulse Development Servers...
echo.
echo Backend: http://127.0.0.1:8001
echo Frontend: http://127.0.0.1:5174
echo.

start "The Velvet Pulse Backend" cmd /k "php artisan serve --port=8001"
timeout /t 2 /nobreak >nul
start "The Velvet Pulse Frontend" cmd /k "npm run dev"

echo Development servers started!
echo Press any key to exit...
pause >nul