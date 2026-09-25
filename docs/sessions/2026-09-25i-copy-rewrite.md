# 2026-09-25i: Copy rewrite applied

Branch: `redesign`. Nothing went to `main`.

## What changed

- 24bde68 `docs/copy/site-copy-rewritten.md` copied from Tomás's Downloads and applied item by item. Templates: the hero sentence with "after a plan is signed" in bold, the three home sheet lines, the projects, work and research intros, the Other work caption, the contact line, the 404 link, the menu's screen reader name, the default meta and social description and the image alt text. Entries: new bodies for all 15, new summaries for 12, a new title for loelens and a new link label on the research proposal, which the deck panel on /research/ also shows. Tags, dates, date ranges, venues and organisations unchanged. Only title, summary and link label lines changed in frontmatter.
- `public/og.png` re-rendered from `scripts/og-image/og.html` with the new hero sentence.
- `docs/copy/site-copy.md` regenerated to match the site. Every entry paragraph checked present.

## Placement

Every item in the rewrite had a place on the site. Nothing was left over.

## Checks

- `bash scripts/check-prose.sh` clean, nothing flagged. `npm run build` passes.

## Open

- Tomás to review the preview before any merge to `main`.
