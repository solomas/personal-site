# Polish state

Last updated: 2026-09-25 (redesign merged to main, 404 and social preview live)

## Status

The redesign runs on branch `redesign` following `docs/design/redesign-plan.md`. On that branch `global.css` now has one global reduced motion rule and the custom cursor is gone. Phase 2 replaced the triptych, so the triptych smoketest below applies to `main` only. The branch needs its own browser check (see css.md). `main` is unchanged.

The site is live at https://tomasvangorp.com on Cloudflare Pages, deployed from `main`. The redesign merged into `main` on 2026-09-25 at 690a8ee. Visual design is complete at desktop scale. Several launch-readiness items remain open: no custom 404 page, no Open Graph image, paragraph spacing not confirmed on the live site, and no mobile testing done.

Inner-page motion landed this session (569e43f). Entry rows and cards lift on hover with a gilt edge, lists and detail articles fade up on load, each guarded by `prefers-reduced-motion` per page. `global.css` still has no global reduced-motion handling. The triptych itself has never been confirmed in a browser, tracked below as a smoketest.

## Scope

- Custom error pages
- Social sharing metadata (OG image, meta tags)
- Mobile and responsive layout verification
- Spacing and typography confirmed against the live site

## Open items

**Mobile and responsive layout**
The site has media queries for narrow viewports. No testing has been done on phones or at narrow breakpoints. Work and detail pages are the highest-risk areas given their more complex layouts.
Next action: open the live site on a phone or use browser devtools at 375px and 390px. Document any layout breaks.

**404 page** (built on branch `redesign`, 2026-09-25f)
Done. `src/pages/404.astro` builds `dist/404.html`, which Cloudflare Pages serves for unknown paths. Live on tomasvangorp.com since the merge at 690a8ee, checked 2026-09-25: an unknown address returns 404 with "Page not found".
No custom 404 page exists. The Cloudflare Pages default shows instead. (Migrated from Netlify to Cloudflare Pages at commit a753e98.)
Next action: create `src/pages/404.astro` using the existing Layout component, matching the site's design language.

**Favicon and Open Graph image** (built on branch `redesign`, 2026-09-25e and 2026-09-25f)
The favicon is a blue or yellow circle. `public/og.png` and Open Graph and Twitter tags on every page, with canonical links, sitemap.xml and robots.txt. Done, live on tomasvangorp.com since the merge at 690a8ee, checked 2026-09-25: og.png and sitemap.xml return 200. 

**Triptych browser smoketest** (obsolete: the redesign replaced the triptych with HomeSheets.astro, merged at 690a8ee)
The triptych door turn, hover lift, carousel and SVG paint cost have not been confirmed in a browser, across both themes or on a phone. The 2026-06-15a session flagged this, and the 2026-06-15b audit repeated it. This is the highest visual-risk gap before a wider share.
Next action: open the homepage in both themes on desktop and a phone, confirm the turn, the lift and the carousel, and check the SVG filters do not jank on a mid-range device.

**Paragraph spacing confirmation**
1.5em paragraph spacing is set on projects and research detail pages via `.entry__body :global(p)`. During the content session it was pushed to 2.5em then dialled back to 1.5em. The user noted it still felt close to default. Not yet verified on the live site. Separately, the work detail template had no paragraph gap because its `p` selector was not globalised, fixed this session (6d31d4a). Work now uses `var(--space-6)` while projects and research use 1.5em, so the two values could be unified when confirming.
Next action: open a detail page on the live site, confirm 1.5em reads well, adjust if needed, and decide whether to unify the work value with it.

**Content-Security-Policy absent, and the deck depends on that**
`public/_headers` sets `X-Frame-Options`, `X-Content-Type-Options` and `Referrer-Policy`, but no Content-Security-Policy. With no CSP there is no `script-src` restriction, which is why the proposal defence deck runs: it uses Babel Standalone, which needs `eval` (`unsafe-eval`), and inline JSX (`unsafe-inline`), and it loads Three.js, React and fonts from `blob:` URLs. A future site-wide CSP would block the deck unless the deck is path-exempted. Cloudflare Pages `_headers` supports path-scoped rules, so any CSP added later must carve out both `/after-the-commitment-proposal-defence.html` and its clean URL `/after-the-commitment-proposal-defence` with a per-path policy allowing `unsafe-eval`, `unsafe-inline` and `blob:` scripts. No change to `_headers` now, this is a backlog note so the dependency is not lost.
Next action: if a site-wide CSP is introduced, path-exempt the deck as above, then re-test the deck live (console clean, WebGL renders, no CSP violations).
