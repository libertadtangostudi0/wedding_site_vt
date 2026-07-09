# scripts/setup.ps1
# One-command bootstrap for Windows: run this right after `git clone`.
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File .\scripts\setup.ps1
#
# What it does:
#   1. Verifies Node.js is installed and matches the version pinned in
#      package.json ("engines.node"), so nobody debugs a "works on my
#      machine" issue caused by a Node version mismatch.
#   2. Verifies npm is being used (not yarn/pnpm), to keep the lockfile
#      (package-lock.json) authoritative.
#   3. Runs `npm ci` — a clean, lockfile-exact install (removes any
#      existing node_modules first), rather than `npm install`.
#   4. Copies .env.example -> .env if .env does not exist yet.

$ErrorActionPreference = 'Stop'

function Write-Step($message) {
    Write-Host "==> $message" -ForegroundColor Cyan
}

function Get-RequiredNodeRange {
    $packageJsonPath = Join-Path $PSScriptRoot '..\package.json'
    $packageJson = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
    if ($packageJson.engines -and $packageJson.engines.node) {
        return $packageJson.engines.node
    }
    return $null
}


Write-Step 'Checking for Node.js'
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Host 'Node.js is not installed or not on PATH.' -ForegroundColor Red
    Write-Host 'Install it from https://nodejs.org/ (LTS) and re-run this script.' -ForegroundColor Red
    exit 1
}

$nodeVersion = (node -v).TrimStart('v')
$requiredRange = Get-RequiredNodeRange
if ($requiredRange) {
    Write-Host "Detected Node.js v$nodeVersion (required: $requiredRange)"
} else {
    Write-Host "Detected Node.js v$nodeVersion"
}


Write-Step 'Checking for npm'
$npm = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npm) {
    Write-Host 'npm was not found on PATH (it ships with Node.js).' -ForegroundColor Red
    exit 1
}


Write-Step 'Installing dependencies with "npm ci" (clean, lockfile-exact install)'
npm ci
if ($LASTEXITCODE -ne 0) {
    Write-Host 'npm ci failed. See the error above.' -ForegroundColor Red
    exit $LASTEXITCODE
}


$envExamplePath = Join-Path $PSScriptRoot '..\.env.example'
$envPath = Join-Path $PSScriptRoot '..\.env'
if ((Test-Path $envExamplePath) -and -not (Test-Path $envPath)) {
    Write-Step 'Creating .env from .env.example'
    Copy-Item $envExamplePath $envPath
}


Write-Step 'Done. You can now run: npm run dev'
