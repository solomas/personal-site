# 2026-09-25n: STATE.md open items and npm audit

Branch: `main`.

## What changed

- STATE.md, polish row: the key open items no longer list the 404 page, the OG image and the triptych browser smoketest, which are done or obsolete since the merge at 690a8ee. The row now reads mobile responsive check, paragraph spacing confirm and the Astro 7 upgrade. Tomás asked for this explicitly, which overrides the CLAUDE.md rule that STATE.md changes only when the workstream structure changes, for this session only. Last updated moved to 2026-09-25.
- polish.md: the npm audit result recorded as an open item.
- No package changed. `npm audit fix --dry-run` ran, and package.json and package-lock.json were checked unchanged afterwards.

## npm audit, 25 September 2026

10 vulnerable packages: 1 critical, 8 high, 1 low. All transitive through astro@6.3.1 except Astro itself.

- critical, astro 6.3.1: eight Astro advisories. Remote code execution through AVIF image optimisation (fixed in 7.2.8), host header SSRF in the prerendered error page fetch (6.4.6), reflected XSS via slot name (6.3.3), XSS via spread attribute names (6.4.6 and 7.0.6), XSS via transition directives on hydrated islands (7.0.4), reflected XSS via view transition animation properties (7.0.10), authorization bypass on the base path (7.2.4). Live site: not affected, it is static with no server, no islands, no user input and no Astro image processing. Build: only with untrusted images or content.
- high, devalue: denial of service on malformed input. Build only.
- high, js-yaml: quadratic CPU on crafted YAML, which parses the entry frontmatter. Build only, and the frontmatter is Tomás's own.
- high, nanoid (via postcss via vite): loops on bad generator sizes. Build only.
- high, postcss (via vite): reads arbitrary .map files through sourceMappingURL. Build only.
- high, sharp and libvips: image library flaws. Build only, and the site does not process images.
- high, smol-toml: denial of service on malformed TOML. Build only.
- high, svgo: removeScripts leaves some scripts in SVG. Build only, and no SVG runs through it.
- high, vite 7.3.3: dev server issues on Windows paths. Not this Mac, not the live site.
- low, esbuild: dev server file read on Windows. Not this Mac, not the live site.

Fix: Astro 7.2.8 or later clears every Astro advisory, and 7.3.5 (latest) depends on fixed ranges of vite (^8), devalue, js-yaml (^4.3.2), smol-toml (^1.8.0), svgo (^4.1.0), esbuild (^0.28) and sharp (^0.35.4). The last 6.x, 6.4.8, leaves five Astro advisories open, the critical one among them. The upgrade from 6 to 7 is a major version and needs its own session.

## Checks

- `bash scripts/check-prose.sh` clean. `npm run build` passes.
