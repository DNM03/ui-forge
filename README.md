# UI Forge

Agent skill for practical frontend interface design, redesign, and UI quality reviews.

## Available Skill

### `ui-forge`

Design, implement, audit, and redesign polished interfaces for:

- product screens, dashboards, landing pages, documentation surfaces, and UI components;
- existing React, Next.js, Tailwind CSS, and general web UI codebases;
- accessibility, responsive layout, keyboard behavior, readable copy, and contrast;
- loading, empty, error, disabled, success, hover, active, and focus-visible states;
- design-system reuse, typography, spacing, color, icons, surfaces, and motion;
- product-specific composition instead of generic AI-looking templates;
- visual QA with concrete quality gates and severity-ranked findings.

The skill prioritizes explicit user constraints, existing behavior, functional correctness, accessibility, platform conventions, product context, performance, and visual direction before anti-slop heuristics. For repository work, it preserves behavior and reports concrete file/line evidence where possible. For greenfield work, it starts from product context and the primary user workflow.

## Install

List the available skills:

```bash
npx skills add DNM03/ui-forge --list
```

Install for Codex:

```bash
npx skills add DNM03/ui-forge \
  --skill ui-forge \
  --agent codex
```

Install for Claude Code:

```bash
npx skills add DNM03/ui-forge \
  --skill ui-forge \
  --agent claude-code
```

Add `--global` to install the skill for all projects.

## Use

Start a fresh agent session after installation.

Design and implement a screen:

```text
Use $ui-forge to design and implement this settings screen.
Include loading, empty, error, disabled, success, keyboard, and responsive states.
```

Redesign an existing UI:

```text
Use $ui-forge to redesign this dashboard.
Preserve the existing routes, data flow, component APIs, and behavior.
Prioritize accessibility, responsive layout, visual hierarchy, and production polish.
```

Audit a page or component:

```text
Use $ui-forge to audit src/components/CreateJobForm.tsx.
Report severity-ordered findings with clickable file and line references.
Separate verified issues from context-dependent considerations.
```

Review only a pasted snippet:

```text
Use $ui-forge to review only this pasted snippet.
Do not inspect repository context.
```

## Task Modes

`ui-forge` supports:

- `Greenfield`: define the design contract, composition, states, and primary workflow.
- `Existing implementation`: inspect the codebase, reuse installed systems, and preserve behavior.
- `Redesign`: identify what is failing, keep what must survive, and change only the useful surface.
- `Audit`: report evidence and prioritized fixes without silently redesigning.
- `Component`: inherit surrounding page context and work at component scope.

## How It Works

UI Forge routes each task through a compact design read:

- surface type;
- entry posture;
- audience and goal;
- brand posture;
- existing foundation or design system;
- variance, motion, and density;
- information complexity.

It then applies quality gates for correctness, accessibility, responsive behavior, rendered-state contrast, readable wrapping, state coverage, alignment, honest content, and visual fit.

## Contributing

Installable skills live under `skills/`. The documentation site, validation tooling, and provenance records support the skill but are not required to install or run it.

```text
skills/
└── ui-forge/
    ├── SKILL.md
    ├── agents/
    └── references/
```

Repository support files:

```text
docs/        architecture, authoring, release, research, and site notes
provenance/ source records, third-party notices, and retained licenses
tooling/    schema validation, Markdown sanitization, and manifest generation
site/       optional static Next.js documentation/catalog site
```

Before opening a pull request:

```bash
npm install
npm run validate
npm run test
```

If you change skill content, edit `skills/ui-forge/` first. Do not manually edit `site/src/generated/manifest.json`; regenerate it with:

```bash
npm run content:build
```

For site development, see [docs/SITE.md](docs/SITE.md).

## Provenance

UI Forge was built from static research into open-source design skill projects and public standards, including Taste Skill, Hallmark, UI/UX Pro Max, OpenAI Codex skill guidance, the Agent Skills specification, WCAG 2.2, and OWASP XSS guidance.

The upstream projects were treated as untrusted research inputs. Their installers, scripts, CLIs, servers, and package commands were not executed. Adapted ideas are rewritten into UI Forge's own structure, with attribution retained in [provenance/](provenance/).

## Security

Do not run unreviewed third-party scripts as part of research or content import. Markdown content is parsed and sanitized before it is rendered by the optional site. Unsafe protocols and raw HTML are rejected by the validation pipeline.

Report security issues through [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).
