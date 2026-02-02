# Warden Agent Skill

Agent Skill for [Warden](https://warden.dev) – a Docker-based local development environment wrapper for PHP applications (Magento, Laravel, Symfony, WordPress, Drupal, and more).

## Installation

```bash
# Via skills CLI
npx skills add lbajsarowicz/warden-skill

# Or via npm
npm install @lbajsarowicz/warden-skill
```

## What This Skill Provides

Teaches AI agents how to:

- Initialize and manage Warden environments
- Import/export databases (including `pv | gzip -d | warden db import` pattern)
- Run shell commands, debugging (Xdebug), and profiling (Blackfire, SPX)
- Manage global services (Traefik, DNS, Mailpit)
- Troubleshoot common issues (DNS, SSL, Xdebug, sync)
- Map `.env` variables to services and generate configuration tables

## Quick Reference

| Task | Command |
|------|---------|
| Start environment | `warden svc up -d && warden env up -d` |
| Database import | `pv dump.sql.gz \| gzip -d \| warden db import` |
| Interactive MySQL | `warden db connect` |
| Shell (debugging) | `warden debug` |
| Shell (normal) | `warden shell` |
| Preview config | `warden env config` |

## Links

- [Warden Documentation](https://docs.warden.dev)
- [Warden GitHub](https://github.com/wardenenv/warden)

## License

MIT
