# Site Development

The Next.js site is a documentation and catalog surface for browsing the UI Forge skill. It is not the distributable product.

## How It Works

Canonical content lives in `skills/ui-forge/`. The site reads only the generated manifest:

```text
skills/ui-forge/*
      |
      v
tooling validation and build
      |
      v
site/src/generated/manifest.json
      |
      v
Next.js static export
```

Do not edit `site/src/generated/manifest.json` manually. Edit the skill source or provenance files, then rebuild the manifest.

## Requirements

- Node.js 20.9 or newer. Node.js 22 is used in the current development environment.
- npm 10 or newer.

## Commands

Install dependencies:

```bash
npm install
```

Regenerate the site manifest:

```bash
npm run content:build
```

Run the local development server:

```bash
npm run dev
```

Run validation and tests:

```bash
npm run validate
npm run lint
npm run typecheck
npm run test
```

Build the static site:

```bash
npm run build
```

The static export is emitted to `site/out/`.

## Deployment

Deploy `site/out/` to a static host. The site uses `output: "export"` and `trailingSlash: true`, so nested routes do not require application server rewrites on typical static hosts.

Security headers remain a hosting concern. Use a restrictive Content Security Policy where the host supports headers.
