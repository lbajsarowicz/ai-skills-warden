# Warden Command Reference

## Environment Lifecycle

| Command | Description |
|---------|-------------|
| `warden env-init <name> <type>` | Initialize new project. Types: magento2, magento1, laravel, symfony, wordpress, drupal, shopware, cakephp, local |
| `warden env up [-d]` | Start project containers. Use `-d` for detached mode |
| `warden env down` | Stop and remove project containers |
| `warden env start` | Start stopped containers |
| `warden env stop` | Stop containers without removing |
| `warden env restart [service]` | Restart all or specific service |
| `warden env ps` | List containers and status |
| `warden env config` | Preview generated docker-compose.yml |
| `warden env pull` | Pull latest Docker images |
| `warden env logs [-f] [service]` | View logs. Use `-f` to follow |
| `warden env exec <service> <cmd>` | Execute command in container |

## Database

| Command | Description |
|---------|-------------|
| `warden db connect` | Interactive MySQL session |
| `warden db import` | Import from stdin. Use `pv file.sql.gz \| gzip -d \| warden db import` for large dumps |
| `warden db dump` | Export via mysqldump. Redirect to file: `warden db dump > backup.sql` |
| `warden db upgrade` | Run MariaDB/MySQL upgrade after version change |

## Shell Access

| Command | Description |
|---------|-------------|
| `warden shell` | Bash in php-fpm container |
| `warden debug` | Bash with Xdebug enabled (use for debugging) |
| `warden blackfire run <cmd>` | Run command with Blackfire profiler |
| `warden spx` | PHP SPX profiler |

## Global Services (svc)

| Command | Description |
|---------|-------------|
| `warden svc up [-d]` | Start Traefik, DNSMasq, Mailpit |
| `warden svc down` | Stop global services |
| `warden svc ps` | List global service status |
| `warden svc logs [service]` | View global service logs |

## Sync (Mutagen, macOS)

| Command | Description |
|---------|-------------|
| `warden sync start` | Start file sync |
| `warden sync stop` | Stop sync |
| `warden sync list [-l]` | List sync status |
| `warden sync monitor` | Continuous status display |
| `warden sync flush` | Force sync cycle |
| `warden sync pause` | Pause sync |
| `warden sync resume` | Resume sync |
| `warden sync reset` | Reset sync session |

## Redis / Valkey

| Command | Description |
|---------|-------------|
| `warden redis [cmd]` | Redis CLI. Pass command or interactive |
| `warden valkey [cmd]` | Valkey CLI (Redis alternative) |

## Other

| Command | Description |
|---------|-------------|
| `warden status` | List running environments |
| `warden doctor [-v]` | Diagnose Warden setup. `-v` for verbose |
| `warden sign-certificate <domain>` | Sign SSL certificate for domain |
| `warden vnc` | VNC access (when enabled) |
