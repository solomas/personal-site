# 2026-09-25h: About page text

Branch: `redesign`. Nothing went to `main`.

## What changed

- 1f08345 The placeholder text on /about/ is replaced with the five paragraphs Tomás supplied, verbatim, each its own paragraph. The page still ends with the Contact link to /contact/. The page now has its own meta and social description: "Tomás van Gorp on his research, his work with organisations and what he is open to."
- The about section of `docs/copy/site-copy.md` lists the new text, all [general], plus the new description. The default description line no longer lists the about page.

## Checks

- `bash scripts/check-prose.sh` clean, nothing flagged in the new text. `npm run build` passes.

## Open

- Tomás to review the preview before any merge to `main`.
