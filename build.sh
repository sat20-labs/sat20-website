#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GITHUB_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PWA_DIR="$GITHUB_DIR/sat20wallet/pwa"

echo "Building SAT20 Wallet PWA..."
cd "$PWA_DIR"
npm run build

echo "Building sat20.org website..."
cd "$SCRIPT_DIR"
npm run build
SAT20_PWA_DIST="$PWA_DIR/dist" npm run sync:pwa

echo "Build complete."
