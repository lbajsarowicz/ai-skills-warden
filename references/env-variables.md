# .env Variable Reference

## Common Variables (All Environments)

| Variable | Default | Description |
|----------|---------|-------------|
| `WARDEN_ENV_NAME` | (required) | Unique project identifier |
| `WARDEN_ENV_TYPE` | (required) | magento2, laravel, symfony, etc. |
| `TRAEFIK_DOMAIN` | `{WARDEN_ENV_NAME}.test` | Base domain |
| `TRAEFIK_SUBDOMAIN` | `app` | Subdomain prefix |
| `WARDEN_WEB_ROOT` | `/` | Web root path |
| `PHP_VERSION` | varies by type | 7.4, 8.1, 8.2, 8.3, 8.4 |
| `PHP_XDEBUG_3` | `1` | Use Xdebug 3 |
| `NODE_VERSION` | varies | Node.js version |
| `COMPOSER_VERSION` | `2` | Composer version |
| `MYSQL_DISTRIBUTION` | `mariadb` | mariadb or mysql |
| `MYSQL_DISTRIBUTION_VERSION` | varies | Database version |

## Service Toggles

| Variable | Default (Magento2) | Container |
|----------|--------------------|-----------|
| `WARDEN_DB` | 1 | db |
| `WARDEN_REDIS` | 1 | redis |
| `WARDEN_VALKEY` | 0 | valkey |
| `WARDEN_ELASTICSEARCH` | 0 | elasticsearch |
| `WARDEN_OPENSEARCH` | 1 | opensearch |
| `WARDEN_VARNISH` | 1 | varnish |
| `WARDEN_RABBITMQ` | 1 | rabbitmq |
| `WARDEN_NGINX` | 1 | nginx |
| `WARDEN_BLACKFIRE` | 0 | php-blackfire |
| `WARDEN_PHP_SPX` | 0 | php-spx |
| `WARDEN_SELENIUM` | 0 | selenium |

## Magento 2 Version Defaults

| Variable | Default |
|----------|---------|
| `PHP_VERSION` | 8.4 |
| `MYSQL_DISTRIBUTION_VERSION` | 11.4 |
| `REDIS_VERSION` | 7.2 |
| `VARNISH_VERSION` | 7.7 |
| `RABBITMQ_VERSION` | 4.1 |
| `OPENSEARCH_VERSION` | 3.3 |
| `NODE_VERSION` | 20 |
