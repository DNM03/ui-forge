# Security policy

## Supported surface

Security fixes target the current main branch. Report vulnerabilities privately to the repository owner before opening a public issue.

## Threat model

The principal trust boundary is content derived from third-party skill repositories. Treat Markdown, JSON, CSV, URLs, snippets, prompts, and command examples as untrusted data.

UI Forge must:

- never execute upstream scripts, installers, binaries, or command examples;
- reject raw HTML in canonical Markdown;
- reject unsafe URL protocols and paths that escape the repository boundary;
- validate all catalog JSON before generation;
- render only sanitized build artifacts in the website;
- keep generated files deterministic and reviewable;
- require explicit human approval before adding a runtime dependency or network-backed feature.

Supply-chain review is required for dependency upgrades. Stars, popularity, and repository age are not security evidence.
