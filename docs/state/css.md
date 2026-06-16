# CSS state

Last updated: 2026-06-16

## Status

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

**Audit Astro scoped CSS for cid-attribute targeting issues (narrowed)**
The `p` instances are now resolved. Projects and research already used `:global(p)`, and the work detail template was fixed to match (6d31d4a). The broader sweep is still open. Any other descendant selector whose right-hand side targets a markdown-rendered element (h2, h3, ul, li, a, blockquote, code) without `:global()` will still fail silently. The three detail templates and any shared layout components that style markdown content have not been swept for those other tag elements.
Next action: grep for selectors inside `<style>` blocks that target tag elements other than `p` without `:global()` inside entry body containers.
