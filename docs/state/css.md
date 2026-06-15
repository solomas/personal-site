# CSS state

Last updated: 2026-06-15

## Status

A known Astro scoping issue was found and fixed during the content session: `.entry__body p` was failing because Astro appends its cid attribute to both sides of descendant selectors, but markdown-rendered elements do not carry that attribute. The fix was `.entry__body :global(p)`. The same class of bug may exist in other template rules that target markdown-rendered content.

The homepage intro is now a triptych altarpiece, built 2026-06-15 (`src/components/Triptych.astro`). It replaced the marquee and the stream-card list. Three pointed gothic arches drawn as inline SVG: Research, Work (dominant), Projects, each linking to its section. It opens once per load from a closed grisaille state, expands a panel on pointer hover or keyboard focus, and becomes a swipeable carousel below 720px. All behaviour is a self-contained vanilla `is:inline` script, no hook in `index.astro`. `prefers-reduced-motion` renders straight to the open state with no transitions. The orphaned `Marquee.astro` component was removed as dead code.

## Fixed palette exception, do not retheme

`Triptych.astro` defines its own internal palette as `--tri-*` custom properties and does not reference the global theme tokens or `--color-bg`. This is deliberate. The altarpiece reads identically in both the yellow and flip themes. Do not migrate these values into `tokens.css` or wire them to the theme toggle. The exception is scoped to this one component. The component's focus ring uses `--tri-gold` so it stays visible against both site backgrounds.

## Scope

- Astro scoped CSS rules on detail page templates
- Any selector that targets elements inside markdown-rendered body content
- Design token usage across component styles (no duplication, all values reference `src/styles/tokens.css`)

## Open items

**Audit Astro scoped CSS for cid-attribute targeting issues**
Any descendant selector where the right-hand side targets an element rendered by Astro's Markdown pipeline will silently fail, because those elements do not carry the scoped cid attribute. The fix pattern is `.parent :global(child-element)`. The audit should cover all three detail page templates (`projects/[...slug].astro`, `research/[...slug].astro`, `work/[...slug].astro`) and any shared layout components that style markdown content.
Next action: grep for selectors inside `<style>` blocks that target tag elements (h2, h3, p, ul, li, a, blockquote, code) without `:global()` inside entry body containers.
