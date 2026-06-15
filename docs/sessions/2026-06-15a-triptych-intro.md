# 2026-06-15a: Triptych altarpiece homepage intro

Replaced the homepage intro (marquee plus stream-card list) with a triptych altarpiece. Built across three prompts: static structure, behaviour, then polish and docs.

## What changed
- New component `src/components/Triptych.astro`. Three pointed gothic arches drawn as inline SVG: Research, Work (dominant, flex-grow 1.3), Projects, each an `<a>` to its section. Emblems: an open eye with rays and a root sprout (Research), a sage sphere with meridians and three figures (Work), a stalk with leaves and two gilded towers (Projects). Fixed internal palette via `--tri-*` custom properties, not the theme tokens.
- Behaviour, all in one vanilla `is:inline` script (ThemeToggle convention), no framework: opens once per load from a closed grisaille state (frame stays gold, only the scene group is tinted), wings swing on a perspective. Pointer hover and keyboard focus expand a panel and shrink neighbours via flex-grow. Touch uses first-tap expand then link. Below 720px it becomes a scroll-snap swipeable carousel where single taps navigate. `prefers-reduced-motion` renders straight to open with no transitions, full function.
- Polish: weightier open timing (swing 1000ms, colour tint 1200ms with 180ms delay), keyboard focus ring in `--tri-gold` visible against both site backgrounds, focus expand scoped out of the carousel so it does not break scroll. Expand is purely visual so focus is never trapped.
- `src/pages/index.astro` keeps the slimmed hero (name, lede) above `<Triptych />`. No behaviour hook needed there. Removed the now-dead `.streams` and stream-card CSS in the earlier prompt.
- Removed orphaned `src/components/Marquee.astro` (dead after the intro swap, used nowhere else).

## Commits
- 7599095 static triptych
- 97b6990 open, expand and carousel behaviour
- this session: polish and docs

## Open
- Visual fine-tuning of arch proportions and emblem alignment across both themes was not verified in a browser this session. Confirm by smoke test. Code-level polish (timing, keyboard, dead code) is done.

## Note on protocol
This session updated STATE.md although no workstream structure changed, because the session prompt explicitly asked to record the triptych in STATE.md. CLAUDE.md normally limits STATE.md edits to structural changes. Explicit single-session override, recorded here.
