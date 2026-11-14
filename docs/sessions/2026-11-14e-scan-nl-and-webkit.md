# 2026-11-14e: Dutch scan page, WebKit check, two fixes

Branch `scan-nl`, not merged. Claude worked under the standing permission in CLAUDE.md, in a clone in its own workspace.

## What changed

- `src/pages/nl/governance-scan.astro` (new): the Governance Scan page in Dutch, for Dutch boards. It follows the English page and explains planetary health in one sentence, since a Dutch board may not know the term. No price.
- `src/pages/work/governance-scan.astro`: a link to the Dutch version next to the back link, the Dutch page links back to the English one.
- `src/components/Layout.astro` and `ReadingLayout.astro`: a `lang` prop for the html element and an `alternates` prop that writes hreflang links into the head.
- `sitemap.xml.ts` lists `/nl/governance-scan/`.
- `src/components/HomeSheets.astro`: on a first visit the bands rise into place instead of sliding in from the right. The slide gave a phone a sideways scroll of 17px while it ran.
- `src/styles/global.css`: the ink hover of `.glass-button` only applies on devices that can hover, so a tap on a phone no longer leaves Menu or the theme button ink.
- Both scan pages: a smaller lede below 720px.

## Checks

- `npm run build` and `bash scripts/check-prose.sh` pass.
- WebKit, the engine of Safari, at 1280px in day and night: the sticky intro stays in view while the bands scroll, the bites show the paper and the shapes, the arrow moves on hover. No console errors.
- WebKit with iPhone 15 emulation: home, work, research, both scan pages and the open menu render as intended. No page scrolls sideways after the fix.

## Open

- Tomás approves the Dutch text on the preview at https://scan-nl.tomasvangorp.pages.dev before the merge.
- A check on a real iPhone. Emulation covers the engine, not the device.
