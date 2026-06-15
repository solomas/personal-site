# State index

Last updated: 2026-06-15

Session conventions and the close-out protocol live in `./CLAUDE.md`.

Workstream state docs live in `docs/state/`. Each covers one workstream and records what is true now, not what happened in a session. For session history see `docs/sessions/`.

| Doc | Workstream | Key open items |
|---|---|---|
| [content.md](docs/state/content.md) | Content entries and field rendering | metadata line on research/projects details, unrendered schema fields, PhD diagram embed |
| [polish.md](docs/state/polish.md) | Launch-readiness polish | 404 page, OG image, mobile responsive check, paragraph spacing confirm |
| [css.md](docs/state/css.md) | Templates and CSS | triptych intro built (fixed-palette exception, do not retheme), Astro scoped CSS cid-attribute audit |
| [optional-features.md](docs/state/optional-features.md) | Speculative features pending decision | about page, tag filtering, site search, education/publications placement |

## How to maintain
- Update the relevant state doc at the start of any session that opens or closes work in that workstream.
- State docs record current truth. Session docs record what happened. These serve distinct purposes. Do not merge them.
- "Last updated" reflects the session that made the most recent substantive change, not today's date unless you changed the file.
