# CSS state

Last updated: 2026-06-15

## Status

A known Astro scoping issue was found and fixed during the content session: `.entry__body p` was failing because Astro appends its cid attribute to both sides of descendant selectors, but markdown-rendered elements do not carry that attribute. The fix was `.entry__body :global(p)`. The same class of bug may exist in other template rules that target markdown-rendered content.

The work detail template still carried the unfixed form of this bug. Its `.entry__body p` was scoped but never matched the markdown `<p>`, so work entries had no paragraph gap at all. Fixed to `.entry__body :global(p)` (6d31d4a). All three detail templates now globalise the `p` rule. Note the values still differ: work uses `var(--space-6)`, projects and research use 1.5em.

Restrained inner-page motion landed across the stream index pages, contact and the three detail templates (569e43f). A shared `--ease-out` token in `tokens.css` holds the homepage arch hover curve. Entry rows and cards lift a few pixels on hover with a gilt left edge drawn in reserved left padding, no layout shift. Entry lists and detail articles fade up on load with a light per-item stagger. Each touched page carries its own `prefers-reduced-motion` guard. `global.css` still has no global reduced-motion handling, so any future motion must add its own guard until that gap is closed.

The triptych flip-theme panel ground was lifted off pure black (df94f10). `--tri-ground-hi` and `--tri-ground-mid` now sit at warm charcoal, `--tri-ground-lo` stays pure black so the arch edge meets page-black at the gild line. This stayed inside the fixed-palette exception below.

The homepage intro is now a triptych altarpiece, built 2026-06-15 (`src/components/Triptych.astro`). It replaced the marquee and the stream-card list. Three pointed gothic arches drawn as inline SVG: Research, Work (dominant), Projects, each linking to its section. It opens once per load from a closed grisaille state, expands a panel on pointer hover or keyboard focus, and becomes a swipeable carousel below 720px. All behaviour is a self-contained vanilla `is:inline` script, no hook in `index.astro`. `prefers-reduced-motion` renders straight to the open state with no transitions. The orphaned `Marquee.astro` component was removed as dead code.

## Fixed palette exception, do not retheme

`Triptych.astro` defines its own internal palette as `--tri-*` custom properties and does not reference the global theme tokens or `--color-bg`. This is deliberate. The altarpiece reads identically in both the yellow and flip themes. Do not migrate these values into `tokens.css` or wire them to the theme toggle. The exception is scoped to this one component. The component's focus ring uses `--tri-gold` so it stays visible against both site backgrounds.

## Scope

- Astro scoped CSS rules on detail page templates
- Any selector that targets elements inside markdown-rendered body content
- Design token usage across component styles (no duplication, all values reference `src/styles/tokens.css`)

## Open items

**Audit Astro scoped CSS for cid-attribute targeting issues (narrowed)**
The `p` instances are now resolved. Projects and research already used `:global(p)`, and the work detail template was fixed to match (6d31d4a). The broader sweep is still open. Any other descendant selector whose right-hand side targets a markdown-rendered element (h2, h3, ul, li, a, blockquote, code) without `:global()` will still fail silently. The three detail templates and any shared layout components that style markdown content have not been swept for those other tag elements.
Next action: grep for selectors inside `<style>` blocks that target tag elements other than `p` without `:global()` inside entry body containers.
