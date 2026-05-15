# Polish state

Last updated: 2026-05-15

## Status

The site is live at https://tomasvangorp.pages.dev on Cloudflare Pages. Visual design is complete at desktop scale. Several launch-readiness items remain open: no custom 404 page, no Open Graph image, paragraph spacing not confirmed on the live site, and no mobile testing done.

## Scope

- Custom error pages
- Social sharing metadata (OG image, meta tags)
- Mobile and responsive layout verification
- Spacing and typography confirmed against the live site

## Open items

**Mobile and responsive layout**
The site has media queries for narrow viewports. No testing has been done on phones or at narrow breakpoints. Work and detail pages are the highest-risk areas given their more complex layouts.
Next action: open the live site on a phone or use browser devtools at 375px and 390px. Document any layout breaks.

**404 page**
No custom 404 page exists. The Cloudflare Pages default shows instead. (Migrated from Netlify to Cloudflare Pages at commit a753e98.)
Next action: create `src/pages/404.astro` using the existing Layout component, matching the site's design language.

**Favicon and Open Graph image**
The Astro scaffold SVG favicon is in place at `public/favicon.svg` and `public/favicon.ico`. No OG image exists. Social shares show no preview image.
Next action: design a 1200x630 OG image, save to `public/`, add `<meta property="og:image">` to the Layout component head.

**Paragraph spacing confirmation**
1.5em paragraph spacing is set on projects and research detail pages via `.entry__body :global(p)`. During the content session it was pushed to 2.5em then dialled back to 1.5em. The user noted it still felt close to default. Not yet verified on the live site.
Next action: open a detail page on the live site, confirm 1.5em reads well, adjust if needed.
