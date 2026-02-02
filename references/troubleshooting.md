# Troubleshooting

## DNS Resolution

| Problem | Platform | Solution |
|---------|----------|----------|
| Port 53 in use | macOS | Disable Internet Sharing, or `sudo brew services stop dnsmasq` |
| ERR_NAME_NOT_RESOLVED | All | Verify `warden svc up -d` is running |
| DNS not working | Linux | Add entries to `/etc/hosts` or configure systemd-resolved |
| DNS not working | Windows/WSL2 | Add 127.0.0.1 as first DNS server |

## SSL Certificates

| Problem | Solution |
|---------|----------|
| "Your connection is not private" | Import `~/.warden/ssl/rootca/certs/ca.cert.pem` to browser |
| Firefox doesn't trust cert | Preferences > Privacy > View Certificates > Import CA |
| Certificate generation fails | Run `warden install` to regenerate CA |

## Xdebug

| Problem | Solution |
|---------|----------|
| Could not connect to debugging client | Check firewall allows port 9003 |
| Xdebug not triggering | Use `warden debug` (not `warden shell`), set XDEBUG_SESSION cookie |
| Wrong host connection | Verify IDE server name: `{WARDEN_ENV_NAME}-docker` |

## Elasticsearch/OpenSearch (Apple Silicon)

| Problem | Solution |
|---------|----------|
| Container crashes (SIGILL) | Use ARM-compatible version (OpenSearch 2.19+) |
| Java VM crash | Increase Docker memory to 6GB+ |

## Mutagen Sync (macOS)

| Problem | Solution |
|---------|----------|
| Files not syncing | `warden sync flush` or `warden sync reset` |
| Sync stuck on stop | Kill mutagen process, restart environment |
| Linux + MUTAGEN_ENABLE=1 | Remove from `~/.warden/.env` (not needed on Linux) |

## Database

| Problem | Solution |
|---------|----------|
| DB container not starting | Check logs: `warden env logs db` |
| Connection refused | Verify `warden env ps` shows db running |

## Email

| Problem | Solution |
|---------|----------|
| Emails not in Mailpit | Check `warden svc logs mailpit`, verify sendmail_path |
| mhsendmail errors (PHP 8.4) | Update to latest Warden images |

## General Diagnostics

```bash
warden doctor -v    # Full diagnostic
warden svc ps       # Global services
warden env ps       # Project containers
warden env logs -f  # Follow all logs
```
