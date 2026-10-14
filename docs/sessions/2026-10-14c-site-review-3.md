# 2026-10-14c: October site review, session 3

Branch: `site-review-oktober`, continuing from 7179a57. Nothing went to `main`. The report for Tomás, in Dutch, is the chapter "Sessie 3" in `REVIEW-oktober-2026.md`.

## What changed

- b89f11a: on /research/after-the-commitment/ the grid "Where the cases stand" gives way to a numbered list of the five dimensions under the heading "What each case is coded on". The new `src/components/CaseDimensions.astro` reads the names from `src/data/phd-progress.json`. No status per case, no legend, no note "This shows how far the coding has got, not what it found." and no update date. The paragraphs above and below are unchanged. The embed marker in the entry is now `case-dimensions`. `CaseProgress.astro` stays, unused, and the status data stays in the JSON file.
- c562f94: the contact description reads "Write to Tomás van Gorp about consulting projects or research collaborations."
- bbfc6e5: `docs/copy/site-copy.md` follows.

## Checks

- `bash scripts/check-prose.sh` and `npm run build` pass, 22 pages. In the build: 30 distinct internal link targets, none broken. The overview page holds the new heading and the five names and none of the old grid text. The contact page carries the new text in the meta, Open Graph and Twitter descriptions.
- `~/Documents/personal-site-screenshots/2026-10-14-site-review-3/`: the overview at 1440 and 390 in both themes.

## Open

- Tomás reviews the preview and decides on the merge.
- After the merge, `docs/state/content.md` should drop or rewrite the steps for updating the grid, since the site no longer shows the status.
