# 2026-09-26e: Timeline removed, PhD pages merged into main

Branch: `phd-live`, then `main` for the merge.

## What changed

- d8567a2 on `phd-live`: the timeline with its now dot leaves /research/. `src/components/ResearchTimeline.astro` with its CSS and script is deleted and `src/pages/research/index.astro` is identical to its state at 8b905da. Nothing else in `src`, `public` or `scripts` changed. `docs/design/redesign-plan.md` now lists two research page elements and the research index opens with the deck panel again. `docs/copy/site-copy.md` no longer lists the timeline text.
- 43bb629 on `main`: merge commit of `phd-live`, so `git revert -m 1 43bb629` undoes it in one step. No branch was deleted.

## Live checks on tomasvangorp.com, 2026-09-26

The deploy was live about a minute after the push.

- /research/ returns 200, holds no timeline, and lists the overview first, then the literature review, the tracker, fragmented adoption and the proposal.
- /research/after-the-commitment/ returns 200 and shows the switch and the grid with fifteen cells.
- /research/fragmented-adoption/ returns 200 and shows the switch and the "Request the draft" link. In a browser the link reads mailto:hello@tomasvangorp.com?subject=Fragmented%20adoption%20draft. The served HTML carries Cloudflare's email protection address instead, which its script turns back into the mailto link, so without JavaScript the link opens Cloudflare's protection page. The email links on the contact page were already served the same way. This is a Cloudflare setting, not site code.
- An unknown address returns 404. sitemap.xml returns 200.
- A plain Python request got 403 from Cloudflare's bot protection, so the checks ran through curl and headless Chrome.

## Checks

`bash scripts/check-prose.sh` and `npm run build` pass on `phd-live` and on `main` after the merge.
