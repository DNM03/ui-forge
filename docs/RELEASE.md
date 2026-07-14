# Release process

## Gates

1. `npm ci` succeeds from the committed lockfile.
2. `npm run validate` passes skill and content validation.
3. `npm run test` passes tooling and site unit tests.
4. `npm run lint` and `npm run typecheck` pass.
5. `npm run build` emits a static export without dynamic-server warnings.
6. Browser checks cover 390x844 and 1440x1000 viewports, keyboard navigation, search, filters, detail routes, and no horizontal overflow.
7. The released skill archive contains only `skills/ui-forge/` and retains no generated site or repository tooling.

## Known dependency note

Next.js 16.2.10 pins PostCSS 8.4.31, which npm currently reports under a moderate stringification advisory. npm's automated forced remediation proposes an invalid downgrade to Next.js 9. UI Forge does not accept user-authored CSS or inject content into style contexts, so the exposure is bounded; track the official stable Next.js line and remove this note when its dependency is updated. Do not use `npm audit fix --force` for this advisory.

## Versioning

Use a repository SemVer version and a separate `schemaVersion` in catalogs. Increment the schema major version only for incompatible content shape changes. Published IDs are permanent; deprecate entries with content notes instead of recycling IDs.

## Deployment

Deploy `site/out/` to any static host. Because `trailingSlash` is enabled, hosts do not need custom rewrites for nested routes. Security headers remain a hosting concern; use a restrictive Content Security Policy where the host supports headers.
