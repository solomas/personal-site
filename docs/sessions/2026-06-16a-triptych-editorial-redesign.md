# 2026-06-16a: Triptych redesign, gothic to modern editorial

The homepage triptych was redesigned from the gothic altarpiece into a modern, Paradiso-inspired editorial piece. The work ran across many iterations in one session and landed as a single commit. No content or schema changes.

## What changed

**Triptych, now three stacked rows (`src/components/Triptych.astro`)**
The inline SVG arches and their fixed `--tri-*` palette are gone. The piece is now three stacked full-width rows linking to Research, Work and Projects, in that order. Work is the dominant row by size alone, the tallest band with the largest title, on the same open treatment as the other two. No row carries a background fill at rest.

Per row: an oversized lowercase display title, hard-left and cut off by the frame on both sides, a large yellow-transparent background numeral (`--color-accent` at low alpha) that runs off the right edge, and a foot line holding the caption on the left and the View affordance on the right. The earlier kicker line (index plus stream name) was removed as duplicate, since the title is the name and the big numeral is the index. Thick `--color-text` rules divide the bands.

**Palette on theme tokens**
The triptych runs entirely on the live theme tokens (`--color-bg`, `--color-text`, `--color-accent`) and flips with the toggle. The old "do not retheme" exception in css.md is retired, recorded there and in STATE.md.

**Motion**
Hover fills a row with a left-to-right `--color-accent` sweep (a scaling pseudo-element, not a flat colour change), the title scales up a touch from its left edge, the View arrow travels further, the numeral drifts and brightens, and the other two rows step back via `:has()`. The reveal slides each row in from the left, staggered top to bottom, with the numerals and titles rising on a clip-up mask just after their row, and a small settle drift at the end. All gated to pointer devices, and a reduced-motion guard stills every part of it.

**Hero reduced to one sentence (`src/pages/index.astro`)**
The separate heading and lede became a single line: "I work, advise and research where science, society and environment meet." The base weight is lighter and the three words science, society and environment sit in `--color-accent` at bold weight, so they carry the line. In the flip theme they light up yellow, in the yellow theme the lift comes from the weight contrast since the accent token is black there. More vertical room was added between the hero and the first row.

**Header and toggle (`src/components/Layout.astro`, `src/components/ThemeToggle.astro`)**
The header inner is now full-width on the home gutter, so the brand sits hard-left in line with the rows and the toggle sits against the right gutter. The theme toggle is larger, roughly 1.4 times its old size, with its logic, persistence and first-visit pulse unchanged.

**Cursor (`src/components/Cursor.astro`)**
The custom cursor is `--color-accent` in every state, so it always contrasts with the page background. Over a hovered row, where the banner fills with `--color-accent`, the cursor flips to `--color-bg` so it stays visible. The flip uses row-level mouseenter and mouseleave, so there is no flicker across inner children.

## Rejected intermediate step

A thin full-width marquee ticker between the hero and the rows was built and then removed. It read as noise against the rest of the layout, so it was dropped and its height budget returned to the component.

## Notes

- Once-per-visit reveal uses the `triptych-revealed` localStorage flag. The old `triptych-opened` flag from the gothic version is no longer read.
- The component owns its height budget through a `clamp` on `.triptych`, tuned as the hero and titles grew. `index.astro` stretches it to the full hero width.
- Mid-session the dev server hit a Vite CSS hot-update desync more than once, serving stale styles while the source was correct. A hard restart with the Vite cache cleared resolved it each time. This matches the 2026-06-15 diagnosis and is environmental, not a code fault.

## Open

- Triptych browser smoketest across both themes and on a phone is still the highest visual-risk gap. See polish.md.
- `global.css` still has no global reduced-motion handling. The triptych and inner-page motion are guarded locally.

## Commit

- One commit, scope homepage triptych redesign. Hash recorded in the close-out report.
