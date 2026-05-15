# CSS state

Last updated: 2026-05-15

## Status

A known Astro scoping issue was found and fixed during the content session: `.entry__body p` was failing because Astro appends its cid attribute to both sides of descendant selectors, but markdown-rendered elements do not carry that attribute. The fix was `.entry__body :global(p)`. The same class of bug may exist in other template rules that target markdown-rendered content.

## Scope

- Astro scoped CSS rules on detail page templates
- Any selector that targets elements inside markdown-rendered body content
- Design token usage across component styles (no duplication, all values reference `src/styles/tokens.css`)

## Open items

**Audit Astro scoped CSS for cid-attribute targeting issues**
Any descendant selector where the right-hand side targets an element rendered by Astro's Markdown pipeline will silently fail, because those elements do not carry the scoped cid attribute. The fix pattern is `.parent :global(child-element)`. The audit should cover all three detail page templates (`projects/[...slug].astro`, `research/[...slug].astro`, `work/[...slug].astro`) and any shared layout components that style markdown content.
Next action: grep for selectors inside `<style>` blocks that target tag elements (h2, h3, p, ul, li, a, blockquote, code) without `:global()` inside entry body containers.
