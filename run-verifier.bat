@echo off
REM =========================================================
REM Email Verifier Script Launcher for Windows
REM =========================================================
REM This batch file makes it easy to run the email verifier
REM on Windows without typing the full command each time.
REM =========================================================

setlocal enabledelayedexpansion

REM Colors (ANSI escape codes)
set "GREEN=[92m"
set "YELLOW=[93m"
set "RED=[91m"
set "BLUE=[94m"
set "RESET=[0m"

echo.
echo %BLUE%===============================================%RESET%
echo %BLUE%   360 Airo Email Verifier - MailTester API    %RESET%
echo %BLUE%===============================================%RESET%
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo %RED%[ERROR] Node.js is not installed or not in PATH%RESET%
    echo %YELLOW%Please install Node.js from: https://nodejs.org/%RESET%
    echo.
    pause
    exit /b 1
)

REM Check if mails.txt exists
if not exist mails.txt (
    echo %RED%[ERROR] mails.txt not found in current directory%RESET%
    echo %YELLOW%Create a mails.txt file with email addresses (one per line)%RESET%
    echo.
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist node_modules (
    echo %YELLOW%[INFO] Installing dependencies...%RESET%
    call npm install axios csv-writer
    if %ERRORLEVEL% NEQ 0 (
        echo %RED%[ERROR] Failed to install dependencies%RESET%
        echo.
        pause
        exit /b 1
    )
)

REM Display options
echo %YELLOW%Options:%RESET%
echo.
echo 1. Run Script (Normal mode)
echo 2. Run Script with PM2 (Background/Auto-restart)
echo 3. Check Status (if running with PM2)
echo 4. View Logs (if running with PM2)
echo 5. Stop Script (if running with PM2)
echo 6. Install PM2 (First time setup)
echo 7. Exit
echo.

set /p choice="Select an option (1-7): "

if "%choice%"=="1" (
    cls
    echo %BLUE%Starting Email Verifier...%RESET%
    echo.
    call node mailtester-verifier.cjs
    goto :end
)

if "%choice%"=="2" (
    where pm2 >nul 2>nul
    if %ERRORLEVEL% NEQ 0 (
        echo %RED%PM2 is not installed%RESET%
        echo %YELLOW%Install PM2: npm install -g pm2%RESET%
        echo.
        pause
        goto :menu
    )
    echo %BLUE%Starting with PM2...%RESET%
    call pm2 start mailtester-verifier.cjs --name "email-verifier"
    echo %GREEN%Script started! View logs with: pm2 logs%RESET%
    echo.
    pause
    goto :end
)

if "%choice%"=="3" (
    cls
    call pm2 list
    echo.
    pause
    goto :menu
)

if "%choice%"=="4" (
    cls
    echo %BLUE%Showing logs (Press Ctrl+C to stop)...%RESET%
    echo.
    call pm2 logs email-verifier
    goto :end
)

if "%choice%"=="5" (
    echo %YELLOW%Stopping script...%RESET%
    call pm2 stop email-verifier
    echo %GREEN%Script stopped!%RESET%
    echo.
    pause
    goto :menu
)

if "%choice%"=="6" (
    echo %YELLOW%Installing PM2 globally...%RESET%
    call npm install -g pm2
    if %ERRORLEVEL% EQU 0 (
        echo %GREEN%PM2 installed successfully!%RESET%
    ) else (
        echo %RED%Failed to install PM2%RESET%
    )
    echo.
    pause
    goto :menu
)

if "%choice%"=="7" (
    goto :end
)

echo %RED%Invalid option%RESET%
echo.
pause
goto :menu

:menu
cls
goto :start

:end
echo.
echo %BLUE%Goodbye!%RESET%
echo.
pause
