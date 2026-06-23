#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
WORKSPACE_ROOT="$(cd "$REPO_ROOT/.." && pwd)"

PWA_DIR="${SAT20_PWA_DIR:-$WORKSPACE_ROOT/sat20wallet/pwa}"
DEPLOY_HOST="${SAT20_DEPLOY_HOST:-103.103.245.177}"
DEPLOY_PORT="${SAT20_DEPLOY_PORT:-20222}"
DEPLOY_USER="${SAT20_DEPLOY_USER:-root}"
DEPLOY_PATH="${SAT20_DEPLOY_PATH:-/var/www/sat20.org}"
BACKUP_DIR="${SAT20_BACKUP_DIR:-/var/backups/sat20.org}"
BACKUP_KEEP="${SAT20_BACKUP_KEEP:-10}"
SKIP_BACKUP="${SAT20_SKIP_BACKUP:-0}"
RSYNC_EXTRA_ARGS="${SAT20_RSYNC_EXTRA_ARGS:-}"
DRY_RUN="${SAT20_DEPLOY_DRY_RUN:-0}"

if [[ ! -f "$PWA_DIR/package.json" ]]; then
  echo "PWA project not found: $PWA_DIR" >&2
  echo "Set SAT20_PWA_DIR to the sat20wallet/pwa path." >&2
  exit 1
fi

if [[ ! -f "$REPO_ROOT/package.json" ]]; then
  echo "sat20-website package.json not found: $REPO_ROOT" >&2
  exit 1
fi

echo "Building SAT20 Wallet PWA..."
(
  cd "$PWA_DIR"
  npm run build
)

echo "Building sat20.org website..."
(
  cd "$REPO_ROOT"
  npm run build
  SAT20_PWA_DIST="$PWA_DIR/dist" npm run sync:pwa
)

echo "Deploying dist/ to $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH ..."

if [[ "$DRY_RUN" == "1" ]]; then
  RSYNC_EXTRA_ARGS="--dry-run $RSYNC_EXTRA_ARGS"
else
  if [[ "$SKIP_BACKUP" != "1" ]]; then
    BACKUP_FILE="sat20.org-$(date +%Y%m%d-%H%M%S).tar.gz"
    echo "Backing up existing remote site to $BACKUP_DIR/$BACKUP_FILE ..."
    ssh -p "$DEPLOY_PORT" "$DEPLOY_USER@$DEPLOY_HOST" \
      "set -e; if [ -d '$DEPLOY_PATH' ]; then mkdir -p '$BACKUP_DIR'; tar -C '$(dirname "$DEPLOY_PATH")' -czf '$BACKUP_DIR/$BACKUP_FILE' '$(basename "$DEPLOY_PATH")'; ls -lh '$BACKUP_DIR/$BACKUP_FILE'; if [ '$BACKUP_KEEP' -gt 0 ] 2>/dev/null; then find '$BACKUP_DIR' -maxdepth 1 -type f -name 'sat20.org-*.tar.gz' -printf '%T@ %p\n' | sort -rn | awk 'NR > '$BACKUP_KEEP' {print \$2}' | xargs -r rm -f; fi; else echo 'Remote deploy path does not exist, backup skipped.'; fi"
  fi

  ssh -p "$DEPLOY_PORT" "$DEPLOY_USER@$DEPLOY_HOST" "mkdir -p '$DEPLOY_PATH'"
fi

# shellcheck disable=SC2086
rsync -avz --delete $RSYNC_EXTRA_ARGS \
  -e "ssh -p $DEPLOY_PORT" \
  "$REPO_ROOT/dist/" \
  "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/" \
  --exclude .git \
  --exclude .github

if [[ "$DRY_RUN" == "1" ]]; then
  echo "Dry run complete. No remote files were changed."
else
  echo "Deployment complete."
fi
echo "Verify: https://sat20.org/pwa/"
