# 2026-09-25f: Redesign phase 6, transitions, 404 and launch gaps

Branch: `redesign`. Nothing went to `main`.

## Commits

- 3a183e7 Page transitions: cross document view transitions through `@view-transition` in CSS, inside a no-preference reduced motion query, so pages stay normal loads and the theme script and menu work unchanged. The shapes, nav, main and footer each get a layer. The shapes layer shows the live new page with no animation and no old snapshot, so the drift carries on. A small head script in `Layout.astro` names one element "morph" on each side through `pageswap` and `pagereveal`: the home sheet or row that links to the other page, or else the page header (`data-vt-header`). The element grows into the header of the page it opens and shrinks back on the way back. 300ms. The plan describes it.
- ae3eb6c 404 page: one centred drifting shape, "Page not found" and a link home. Built as `dist/404.html`.
- a3aee2c Launch gaps: `site: "https://tomasvangorp.com"` in `astro.config.mjs`. Every page has a canonical link and Open Graph and Twitter tags with its title and summary (detail pages use the entry summary, index pages their intro, the rest the site description). The 404 page carries noindex instead of a canonical link. `src/pages/sitemap.xml.ts` lists 22 URLs: the fixed pages, all 15 entries and the deck. `public/robots.txt` points to it. `public/og.png` (1200 by 630, day theme) is rendered from `scripts/og-image/og.html` by `scripts/og-image/render.mjs` through headless Chrome.
- 40f85a2 Deck: the two Google Fonts preconnect hints removed, 144 bytes, nothing else. The bundled Inter still loads, no outside requests, first slide pixel identical.

## 404 on Cloudflare Pages

Before this session the preview answered unknown paths with status 200 and the home page, the Pages fallback when no 404.html exists. With `dist/404.html` in the build, Pages serves it with status 404. Checked on the preview after the push, see the report.

## Where the build departs from the brief

- Index pages have no glass header strip, so a home sheet grows into the page title and intro there. Detail pages morph into the strip as asked.
- The deck panel opens the deck, a standalone page outside the site layout that does not opt into view transitions, so that one click loads normally without a morph.
- The 404 page keeps the site nav and footer from the layout.
- The link home reads "Home".

## Checks

- `bash scripts/check-prose.sh` clean and `npm run build` passes after each commit.
- `~/Documents/personal-site-screenshots/2026-09-25-redesign-phase6/`: the 404 page in both themes at 1440 and 390, the social preview image, and `recordings/` with three transitions in day mode as PNG frame sequences and GIFs: home to Research, a Work row to its detail page, and back.

## Open

- Transitions on a real phone and in Safari.
- Tomás to review the preview before any merge to `main`.
