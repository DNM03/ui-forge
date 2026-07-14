# UI Forge

UI Forge is an installable agent skill and a static documentation application for designing and implementing context-aware interfaces without generic template output. It synthesizes the routing discipline of Taste, the composition system of Hallmark, and the structured lookup model of UI/UX Pro Max behind explicit accessibility, safety, and provenance gates.

## Repository map

- `skill/ui-forge/`: the distributable skill and canonical content source.
- `tooling/`: schema validation, Markdown sanitization, and site-manifest generation.
- `site/`: the Next.js documentation and catalog application.
- `provenance/`: source snapshots, extraction decisions, notices, and retained licenses.
- `docs/`: architecture, research, authoring, and release guidance.

The site never reads the skill folder at runtime. `npm run content:build` validates the canonical files and emits a sanitized manifest into `site/src/generated/` before Next.js builds the static export.

## Requirements

- Node.js 20.9 or newer. Node.js 22 is used in the current development environment.
- npm 10 or newer.

## Commands

```bash
npm install
npm run validate
npm run test
npm run build
npm run dev
```

`npm run build` emits the static website to `site/out/`. The distributable skill is only `skill/ui-forge/`; repository documentation, tooling, tests, and the website are intentionally outside that package.

## Safety boundary

The three upstream repositories are treated as untrusted research inputs. UI Forge does not run their installers, scripts, CLIs, package commands, or servers. Markdown is parsed as data, raw HTML is rejected, URLs are protocol-checked, and the site only renders build-generated sanitized HTML.

See [docs/RESEARCH.md](docs/RESEARCH.md), [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), and [provenance/THIRD_PARTY_NOTICES.md](provenance/THIRD_PARTY_NOTICES.md).
