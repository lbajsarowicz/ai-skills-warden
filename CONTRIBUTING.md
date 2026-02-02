# Contributing to Warden Agent Skill

Thank you for your interest in contributing. This document outlines the process and standards for contributing.

## Development Workflow

1. **Fork** the repository and clone your fork
2. **Create a branch** from `main`: `git checkout -b feat/your-feature` or `fix/your-fix`
3. **Make changes** following our commit conventions
4. **Open a Pull Request** targeting `main`

All changes to `main` must go through a Pull Request. Direct pushes to `main` are not allowed.

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/). Each commit must follow:

```
<type>(<scope>): <description>
```

### Types

| Type | Use for | Version impact |
|------|---------|----------------|
| `feat` | New features | Minor bump |
| `fix` | Bug fixes | Patch bump |
| `docs` | Documentation only | No bump |
| `style` | Formatting, no code change | No bump |
| `refactor` | Code restructure | No bump |
| `perf` | Performance improvements | Patch bump |
| `test` | Adding tests | No bump |
| `ci` | CI/CD changes | No bump |
| `chore` | Maintenance | No bump |

### Scopes

Use one of: `skill`, `commands`, `environments`, `troubleshooting`, `workflows`, `deps`, `release`, `config`

### Examples

```
feat(commands): add database backup workflow
fix(troubleshooting): correct Xdebug connection steps
docs(config): update README installation section
ci(config): add id-token permission for npm
```

### Breaking Changes

For breaking changes, append `!` after the type/scope or add `BREAKING CHANGE:` in the footer:

```
feat(skill)!: restructure SKILL.md format
```

## PR Checks

Before merging, ensure:

- [ ] All commits follow Conventional Commits
- [ ] PR Checks workflow passes (commitlint, skill validation)
- [ ] SKILL.md remains under 500 lines
- [ ] `metadata.json` and `package.json` are valid JSON

## Release Process

Releases are automated. When your PR is merged to `main`:

- `feat` commits → minor version bump (1.0.0 → 1.1.0)
- `fix` / `perf` commits → patch bump (1.0.0 → 1.0.1)
- `feat!` / `BREAKING CHANGE` → major bump (1.0.0 → 2.0.0)

The workflow will publish to npm and create a GitHub Release automatically.

## Questions

Open an [Issue](https://github.com/lbajsarowicz/ai-skills-warden/issues) for questions or discussions.
