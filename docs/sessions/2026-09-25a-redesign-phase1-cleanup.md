# 2026-09-25a: Redesign phase 1, clean up without a visible change

Branch: `redesign`, cut from `main` at 92f9bf8. Nothing went to `main`.

## What changed

- Added `docs/design/redesign-plan.md`, the approved plan for the folded layers redesign. Phase 2 builds it.
- Removed the custom cursor: `src/components/Cursor.astro`, its import and mount in `Layout.astro`, and the `cursor: none` rule in `global.css`. This is the only intended visible change.
- New `src/components/StreamHeader.astro`: the index page header (section label, optional stream tag, title, lede), used by projects, research, work and contact. The lede takes a prop or a `lede` slot. Contact passes its link list through the default slot.
- New `src/components/EntryList.astro`: the entry list for the three index pages. A `work` variant keeps the work index title nudge and summary fade on hover.
- New `src/components/EntryLayout.astro`: one detail layout for projects, research and work. Props keep the current differences: `metaVariant` (plain mono line or the work accent line), `paragraphGap` (work uses `var(--space-6)`, the others 1.5em) and the optional field footer (work passes no fields, so it still shows none).
- `global.css` now holds `@keyframes riseIn` once, a `.prose` class for markdown body content (replacing the scattered `:global()` rules) and one global `prefers-reduced-motion` rule that removes all animations and transitions. Component guards remain only where a hover would still move something.
- Hardcoded values replaced with tokens. The flip hero colour `#ffffff` in `index.astro` now reads `var(--color-text)`, which is `#ffffff` in the flip theme.
- New tokens in `tokens.css`: `--font-size-root`, six `--text-legacy-*` sizes, a `--tracking-*` scale, `--space-7`, `--space-legacy-035`, `--entry-date-width`, `--folder-peek-height`, `--header-height`, `--radius-pill`, `--border-hairline`, `--border-medium`, `--border-thick`, `--underline-offset` and `--underline-offset-lg`. Unused tokens stay for now.

## Checks

- `bash scripts/check-prose.sh` clean. `npm run build` passes, 20 pages.
- Headless Chrome screenshots of the old and new builds, compared pixel by pixel with reduced motion forced so no animation is caught mid frame: eleven pages at 1440 and 390 wide in the default theme, and eight pages at 1440 in the flip theme. All identical. Two single mismatches were rerun and came back identical, so they were capture noise.
- Not compared by machine: hover states and the animations themselves.

## Where the look can still differ

- Every page: the custom cursor is gone, the system cursor is back.
- Every page, for visitors with reduced motion on: transitions (theme colour fade, nav underline, hover colour fades) are now instant. Before, only animations were stopped.
- Work index, Other work folder: archived cards used to inherit the live card rules through a shared `work-card` class. Those rules are now written on `.archived-card` directly. The resolved values are the same.

## Left as literal values on purpose

- Motion distances and durations (lifts, nudges, `riseIn` offset, timings).
- Small px details inside controls: `StreamTag` and `ThemeToggle` padding, the toggle dot, the nav underline gap and the entry date offset. The root is 17px, so no rem token matches them exactly.
- Media query breakpoints (600px, 720px), because custom properties do not work in media queries.
- The fluid `clamp()` formulas in `Triptych.astro` and the home hero. Phase 2 replaces both.
- Opacity values.

## Open

- Phase 2: build the plan in `docs/design/redesign-plan.md` on this branch.
- CLAUDE.md still describes the design tokens as "Dark anthracite base, warm mustard accent, Inter body, Geist display, Geist Mono meta". That was already out of date and conflicts with the plan. Update it when phase 2 changes the tokens, as an explicit task.
- STATE.md still lists "global.css lacks reduced-motion handling" under css. Its own rule limits edits to structure changes, so it was left alone.
