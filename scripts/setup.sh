#!/usr/bin/env bash
# scripts/setup.sh
# One-command bootstrap for macOS/Linux/WSL: run this right after `git clone`.
#
# Usage:
#   ./scripts/setup.sh
set -euo pipefail

step() { printf '\n==> %s\n' "$1"; }

step 'Checking for Node.js'
if ! command -v node >/dev/null 2>&1; then
  echo 'Node.js is not installed or not on PATH.' >&2
  echo 'Install it from https://nodejs.org/ (LTS) and re-run this script.' >&2
  exit 1
fi
echo "Detected Node.js $(node -v)"

step 'Checking for npm'
if ! command -v npm >/dev/null 2>&1; then
  echo 'npm was not found on PATH (it ships with Node.js).' >&2
  exit 1
fi

step 'Installing dependencies with "npm ci" (clean, lockfile-exact install)'
npm ci

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
if [[ -f "$ROOT_DIR/.env.example" && ! -f "$ROOT_DIR/.env" ]]; then
  step 'Creating .env from .env.example'
  cp "$ROOT_DIR/.env.example" "$ROOT_DIR/.env"
fi

step 'Done. You can now run: npm run dev'
