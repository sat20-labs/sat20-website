# Manual deployment

The production site `sat20.org` is served from the public gateway
`103.103.245.177`, with static files under `/var/www/sat20.org`.

Use this path when GitHub self-hosted runner deployment is unavailable, or when
the build should be performed locally or on the internal development machine
`103` before syncing to the public gateway.

## Build and deploy

Run from the `sat20-website` repository:

```bash
npm run deploy:manual
```

The script will:

1. Build `../sat20wallet/pwa`.
2. Build `sat20-website`.
3. Copy the PWA build into `dist/pwa`.
4. Back up the current remote site to `/var/backups/sat20.org`.
5. Keep the latest 10 backup archives and remove older ones.
6. Sync `dist/` to `root@103.103.245.177:/var/www/sat20.org`.

## Configuration

Override defaults with environment variables:

```bash
SAT20_DEPLOY_HOST=103.103.245.177 \
SAT20_DEPLOY_PORT=22 \
SAT20_DEPLOY_USER=root \
SAT20_DEPLOY_PATH=/var/www/sat20.org \
SAT20_BACKUP_DIR=/var/backups/sat20.org \
SAT20_BACKUP_KEEP=10 \
SAT20_PWA_DIR=../sat20wallet/pwa \
npm run deploy:manual
```

On the internal `103` development machine, run the same command from
`/data1/github/sat20-website` if `sat20wallet` is checked out beside it.

After deployment, verify:

```bash
curl -I https://sat20.org/pwa/
curl -I https://sat20.org/pwa/manifest.webmanifest
```

To build and simulate the remote sync without changing server files:

```bash
SAT20_DEPLOY_DRY_RUN=1 npm run deploy:manual
```

To deploy without creating a backup:

```bash
SAT20_SKIP_BACKUP=1 npm run deploy:manual
```

To keep all backups, set:

```bash
SAT20_BACKUP_KEEP=0 npm run deploy:manual
```
