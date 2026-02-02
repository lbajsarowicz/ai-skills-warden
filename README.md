# Warden Agent Skill

Agent Skill for [Warden](https://warden.dev) – a Docker-based local development environment wrapper for PHP applications (Magento, Laravel, Symfony, WordPress, Drupal, and more).

## Installation

```bash
# Via skills CLI
npx skills add lbajsarowicz/ai-skills-warden

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

## Publishing (Maintainers)

Releases are automated via Conventional Commits. Merge a PR with `feat:` or `fix:` commits to trigger a new version and npm publish.

### One-time Setup

1. **npm access token**
   - Create at https://www.npmjs.com/settings/lbajsarowicz/tokens
   - Type: Automation, enable "Bypass two-factor authentication (2FA)"
   - Add as GitHub secret: `NPM_TOKEN`

2. **GitHub PAT for release**
   - Create a Personal Access Token (classic: `repo` scope, or fine-grained: `Contents` + `Metadata` = Read and write)
   - Add as GitHub secret: `RELEASE_TOKEN`
   - **Branch protection**: If `main` is protected, add the PAT owner (e.g. `lbajsarowicz`) to **Settings → Branches → main → Allow specified actors to bypass required pull requests**. Otherwise the workflow's direct push will be rejected.

### Release Flow

1. Commit with Conventional Commits: `feat(commands): add X`, `fix(troubleshooting): correct Y`
2. Open PR and merge to `main`
3. CI calculates version, pushes version bump to `main`, creates tag (e.g. `v1.1.0`)
4. Release workflow publishes to npm and creates GitHub Release

## License

MIT
