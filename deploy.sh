#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEPLOY_HOST="103.103.245.177"
DEPLOY_USER="root"
DEPLOY_PATH="/var/www/sat20.org"
BACKUP_DIR="/var/backups/sat20.org"

"$SCRIPT_DIR/build.sh"

echo "Deploying dist/ to $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH ..."

BACKUP_FILE="sat20.org-$(date +%Y%m%d-%H%M%S).tar.gz"
ssh "$DEPLOY_USER@$DEPLOY_HOST" \
  "mkdir -p '$BACKUP_DIR'; if [ -d '$DEPLOY_PATH' ]; then tar -C /var/www -czf '$BACKUP_DIR/$BACKUP_FILE' sat20.org; fi; mkdir -p '$DEPLOY_PATH'"

rsync -avz --delete \
  "$SCRIPT_DIR/dist/" \
  "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/" \
  --exclude .git \
  --exclude .github

echo "Deployment complete."
echo "Verify:"
echo "  https://sat20.org/"
echo "  https://sat20.org/pwa/"
