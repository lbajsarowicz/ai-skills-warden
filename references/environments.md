# Warden Environment Types

## Supported Types

| Type | Services | Use Case |
|------|----------|----------|
| `magento2` | Nginx, Varnish, PHP-FPM, MariaDB, OpenSearch, Redis, RabbitMQ | Adobe Commerce / Magento 2 |
| `magento1` | Nginx, PHP-FPM, MariaDB, Redis | Magento 1.x |
| `laravel` | Nginx, PHP-FPM, MariaDB, Redis | Laravel apps |
| `symfony` | Nginx, PHP-FPM, MariaDB, Redis | Symfony 4+ |
| `wordpress` | Nginx, PHP-FPM, MariaDB | WordPress sites |
| `drupal` | Nginx, PHP-FPM, MariaDB | Drupal CMS |
| `shopware` | Nginx, PHP-FPM, MariaDB, Redis | Shopware 6 |
| `cakephp` | Nginx, PHP-FPM, MariaDB | CakePHP |
| `local` | User-defined | Custom Docker setup |

## Initialization

```bash
warden env-init <project-name> <type>
```

Example: `warden env-init mystore magento2`

## Default Services by Type

- **Magento 2**: DB, Redis, Varnish, RabbitMQ, OpenSearch (or Elasticsearch)
- **Magento 1**: DB, Redis
- **Laravel/Symfony/Shopware**: DB, Redis
- **WordPress/Drupal/CakePHP**: DB

## Optional Services

Toggle in `.env` with `WARDEN_*=1` or `0`:

- `WARDEN_ELASTICSEARCH`
- `WARDEN_OPENSEARCH`
- `WARDEN_VARNISH`
- `WARDEN_RABBITMQ`
- `WARDEN_BLACKFIRE`
- `WARDEN_PHP_SPX`
- `WARDEN_SELENIUM`
- `WARDEN_VALKEY`
