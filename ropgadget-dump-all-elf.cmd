@echo off

set pyPath=C:\Python27\python.exe
::set pyPath=C:\Python27\pythonw.exe

for %%F in (%input%) do set name=%%~nxF

cls
echo Dumping ROP Gadgets From All Found PRX Files....
echo.
echo.

setlocal ENABLEDELAYEDEXPANSION
set prxList=%~dp0prxList.txt
del /f /s /q %prxList%
dir /b /a-d *.prx >>%prxList%
for /f "tokens=* delims=" %%a in (%prxList%) do (
    set /a prxList=!prxList! + 1
	set var!prxList!=%%a
	echo Dumping %%a....
	echo.
    "%pyPath%" %~dp0ROPgadget.py --binary %%a --dump>>%%a.txt
)
endlocal


pause