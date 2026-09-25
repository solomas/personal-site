# CSS state

Last updated: 2026-09-25

## Status

The redesign runs on branch `redesign` following `docs/design/redesign-plan.md`. Phase 1 (2026-09-25a) cleaned up the code with no visible change beyond removing the custom cursor. Phase 2 (2026-09-25b) built the plan: mist and night tokens, self-hosted Geist, the folded background, glass classes and the new layouts. The triptych is replaced by `HomeSheets.astro` on this branch. Phase 3 (2026-09-25c) turned the palette monochrome, replaced the folds with drifting round shapes and a static grain, added focus on hover on the home page and a deck panel on the research page. Phase 4 (2026-09-25d) brought in blue, red and yellow with fixed roles, one red dot in the nav, two non overlapping shapes, focus on hover for every highlight through shared code, and a 70s stripe as a separate experiment commit. The index header, entry list and detail layout are now shared components (`StreamHeader`, `EntryList`, `EntryLayout`). `@keyframes riseIn`, the markdown body styles (`.prose`) and one global reduced motion rule live in `global.css`. Hardcoded values now read tokens. Everything below describes `main` unless it says otherwise.

A known Astro scoping issue was found and fixed during the content session: `.entry__body p` was failing because Astro appends its cid attribute to both sides of descendant selectors, but markdown-rendered elements do not carry that attribute. The fix was `.entry__body :global(p)`. The same class of bug may exist in other template rules that target markdown-rendered content.

The work detail template still carried the unfixed form of this bug. Its `.entry__body p` was scoped but never matched the markdown `<p>`, so work entries had no paragraph gap at all. Fixed to `.entry__body :global(p)` (6d31d4a). All three detail templates now globalise the `p` rule. Note the values still differ: work uses `var(--space-6)`, projects and research use 1.5em.

Restrained inner-page motion landed across the stream index pages, contact and the three detail templates (569e43f). A shared `--ease-out` token in `tokens.css` holds the homepage arch hover curve. Entry rows and cards lift a few pixels on hover with a gilt left edge drawn in reserved left padding, no layout shift. Entry lists and detail articles fade up on load with a light per-item stagger. Each touched page carries its own `prefers-reduced-motion` guard. `global.css` still has no global reduced-motion handling, so any future motion must add its own guard until that gap is closed.

The homepage intro is a modern editorial triptych, rebuilt 2026-06-16 (`src/components/Triptych.astro`). It replaced the earlier gothic altarpiece, which was inline SVG arches painted with a fixed `--tri-*` palette. The new piece is three stacked full-width rows, order Research, Work, Projects, with Work the dominant row by size alone (tallest band, largest title). Titles are hard-left, lowercase and oversized, cut off by the frame on both sides. Each row carries a large yellow-transparent background numeral that runs off the right edge. Hover fills the row with a left-to-right accent sweep while the inactive rows step back. The reveal slides each row in from the left, staggered top to bottom, once per visit, gated by the `triptych-revealed` localStorage flag and a reduced-motion guard. All behaviour is a self-contained vanilla `is:inline` script, no hook in `index.astro`.

## Triptych palette, now on theme tokens

`Triptych.astro` runs entirely on the live theme tokens (`--color-bg`, `--color-text`, `--color-accent`) and flips with the theme toggle. It no longer defines its own `--tri-*` palette. This retires the earlier "do not retheme" exception, which existed only because the gothic painting had to read identically in both themes. The redesign dropped the painting, so the reason is gone. There is now no component-scoped palette to protect, and the design-token rule (reference the custom properties, never duplicate values) applies to the triptych like every other component. The focus ring uses `--color-accent`.

## Scope

- Astro scoped CSS rules on detail page templates
- Any selector that targets elements inside markdown-rendered body content
- Design token usage across component styles (no duplication, all values reference `src/styles/tokens.css`)

## Open items

**Redesign phase 4** (built 2026-09-25d, branch `redesign`, awaiting review)
Built in fb6ac97 to 99371de. The stripe and larger corners sit in ce995f2 and can be reverted alone.
Next action: Tomás reviews the preview and decides on the stripe. Check hover, focus and the drift on a real phone. Merge to `main` only after approval.

**Redesign phase 3** (built 2026-09-25c, branch `redesign`, superseded by phase 4)
Built in a0b9ef9, a2b1124, 4d90f4d, dbca9bd and f7600ef.
Next action: Tomás reviews the preview. Check hover, focus and the drift on a real phone. Merge to `main` only after approval.

**Redesign phase 2** (built 2026-09-25b, branch `redesign`, superseded by phase 3)
Built in d9e7bd1, 3a2b3e3 and df952e6. The phase 1 props in `EntryLayout` are gone.
Next action: Tomás reviews the preview. Check the night background banding on a real screen, and hover, focus and the home settle in a browser. Merge to `main` only after approval.

**Audit Astro scoped CSS for cid-attribute targeting issues (narrowed)**
On branch `redesign` this is resolved: markdown body styles moved to the global `.prose` class in `global.css`, so no scoped selector targets markdown output any more. Still open on `main` until the branch merges.
The `p` instances are now resolved. Projects and research already used `:global(p)`, and the work detail template was fixed to match (6d31d4a). The broader sweep is still open. Any other descendant selector whose right-hand side targets a markdown-rendered element (h2, h3, ul, li, a, blockquote, code) without `:global()` will still fail silently. The three detail templates and any shared layout components that style markdown content have not been swept for those other tag elements.
Next action: grep for selectors inside `<style>` blocks that target tag elements other than `p` without `:global()` inside entry body containers.
