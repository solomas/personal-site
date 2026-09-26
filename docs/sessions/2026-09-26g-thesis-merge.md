# 2026-09-26g: Thesis strip, no site footer, thesis-header merged into main

Branch: `thesis-header`, then `main` for the merge.

## What changed

- 27e08f3 on `thesis-header`: the thesis page strip no longer carries "Doctoral research, University of Lisbon". It reads "research · Doctoral Programme in Planetary Health Studies, Universidade de Lisboa", so the university appears once and no date shows, because the featured entry leaves its date out of the strip. The `dateLabel` field was then unused and is gone from the schema and the entry.
- 27e08f3 also removes the site footer with "Last updated" and its Contact link from every page, with its CSS. The focus effect and the page transitions no longer name the footer. The main area keeps the room at the bottom of the page. Contact stays in the menu on every page and the about page keeps its Contact link. Plan and copy doc follow.
- e3d1fda on `main`: merge commit of `thesis-header`, so `git revert -m 1 e3d1fda` undoes it in one step. No branch was deleted.

## Checks

- `bash scripts/check-prose.sh` and `npm run build` pass on `thesis-header` and on `main`.
- Before the merge: the thesis panel is still one tab stop with the strong focus effect, and the page transition still morphs it into the strip. The transition now carries the header and main layers only.
- Live on tomasvangorp.com, about 50 seconds after the push: all 21 sitemap pages and the 404 page have no site footer and have Contact in the menu, an unknown address returns 404, sitemap.xml returns 200, /research/ shows the thesis panel above the deck panel and the list with no date in it, the strip of /research/after-the-commitment/ names the university once and shows no date, and the about page still ends with its Contact link.
