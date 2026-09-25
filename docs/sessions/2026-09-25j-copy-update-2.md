# 2026-09-25j: Copy update 2

Branch: `redesign`. Nothing went to `main`.

## What changed

- 0895902 `docs/copy/site-copy-update-2.md` copied from Tomás's Downloads and applied item by item. About: "I compare Wales, Brazil and Zhejiang Province in China." now reads "I compare cases in Wales, Brazil and China." Research overview: new summary and body. Conversion Tracker, fragmented adoption paper: new bodies. Literature review: new summary and body. loelens: new summary and body. The research proposal is unchanged, as the file says. Only summary lines changed in frontmatter.
- `docs/copy/site-copy.md` regenerated to match the site. Every entry paragraph checked present.

## Lishui and Zhejiang

Searched `src/`, `scripts/` and the rest of `public/`. No match anywhere in the site source. They still appear in `public/after-the-commitment-proposal-defence.html`, the proposal defence deck (Lishui 9 times, Zhejiang 3 times), which this update did not list, and in the historical copy files `docs/copy/site-copy-rewritten.md` (the earlier overview body) and `docs/copy/site-copy-update-2.md` (quoting the replaced sentence).

## Checks

- `bash scripts/check-prose.sh` clean, nothing flagged. `npm run build` passes.

## Open

- Tomás to decide whether the deck's Lishui and Zhejiang mentions stay.
- Tomás to review the preview before any merge to `main`.
