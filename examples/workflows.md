# Common Workflows

## New Magento 2 Project Setup

```bash
warden env-init mystore magento2
# Edit .env to customize versions if needed
warden svc up -d
warden env up -d
warden shell
# Inside: composer install, bin/magento setup:install, etc.
```

## Database Import from Production

```bash
# With progress (recommended for large dumps)
pv production.sql.gz | gzip -d | warden db import

# Without pv
gzip -dc production.sql.gz | warden db import

# Plain SQL
warden db import < database.sql
```

## Debugging with Xdebug

```bash
warden debug
# Inside container, Xdebug is preconfigured
php bin/magento cache:flush
# Set breakpoint in IDE, trigger from browser with XDEBUG_SESSION cookie
```

## Update Service Versions for Framework

1. Search official docs for framework system requirements (e.g. Magento 2.4.8-p2)
2. Read project `.env`
3. Update `PHP_VERSION`, `MYSQL_DISTRIBUTION_VERSION`, `OPENSEARCH_VERSION`, etc.
4. Run `warden env pull && warden env up -d --force-recreate`

## Verify Service Status

```bash
warden env ps
# Check for php-fpm, php-debug, db, nginx, etc.
```

## Generate Service Configuration Table

1. Read `.env`
2. Map `WARDEN_*` variables to service status (1=enabled, 0=disabled)
3. Map version variables (PHP_VERSION, MYSQL_DISTRIBUTION_VERSION, etc.)
4. Output table: Service | Status | Version

## Troubleshoot Non-Loading Site

```bash
warden svc ps          # Global services running?
warden env ps          # Project containers running?
ping app.myproject.test  # DNS resolving?
warden env logs nginx  # Check nginx logs
warden doctor -v       # Full diagnostic
```
