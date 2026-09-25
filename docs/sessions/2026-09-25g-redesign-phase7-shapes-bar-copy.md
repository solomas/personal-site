# 2026-09-25g: Redesign phase 7, fainter shapes, top bar, copy export

Branch: `redesign`. Nothing went to `main`.

## Commits

- b450792 Fainter shapes: one `--shape-strength` token at 0.33 sets the shapes to about a third of full strength, a pale yellow wash in day (#fff0ab on white) and a dim deep blue in night (#001135 on black). Size, form and drift unchanged. `public/og.png` re-rendered from `scripts/og-image/og.html` at the same strength. The plan describes it.
- 5226200 Top bar: on every page, the home page included, the name on the left and Menu then the theme button on the right. The links sit in a drawer that grows the bar over 250ms (its grid row eases from 0fr to 1fr) while they fade and slide in. While closed they are hidden from the keyboard and screen readers. A "js" class from the head script closes the menu, so without JavaScript the links show open and Menu stays hidden. The drawer sits between Menu and the theme button in the DOM, so Tab moves from Menu into the links, and CSS order keeps the theme button visually next to Menu. Escape closes and returns focus to Menu. The word "flip" is gone: the theme button is an inline SVG circle, half filled in the text colour, with an aria-label of "Switch to dark theme" or "Switch to light theme". The plan describes it.
- 6ca723a Copy export in `docs/copy/site-copy.md`: every visible text grouped by page, with source file and a [phd] or [general] tag, and all 15 entries with title, summary, strip fields, tags, link labels and body. Checked: every body paragraph is present verbatim. No copy changed.

## Contrast, WCAG AA

Fainter shapes only raise contrast. Day: ink 16.39 to 21.00, blue 8.27 to 10.60, muted on glass and sheets 6.27 to 7.00. Night: ink 15.52 to 21.00, yellow 10.62 to 14.37, muted on glass and sheets 6.37 to 7.57. Lowest values include the grain at its worst. Selection 10.60 in day and 14.37 in night, focus ring against the ground the same.

## Notes

- The drawer sits in the page flow, so the page content moves down while the menu opens and back up while it closes.
- In the tab order the theme button comes after the links, since the links follow Menu directly.
- The copy export leaves out the deck's slide text, because the deck is a standalone generated file outside the templates, and the role field on work entries, because the site never shows it.

## Checks

- `bash scripts/check-prose.sh` clean and `npm run build` passes after each commit.
- Menu tested through the DevTools protocol: closed on load with the links hidden and skipped by Tab, opened by click and by Enter, Tab from Menu into the first link, Escape closes and returns focus, links open without JavaScript.
- `~/Documents/personal-site-screenshots/2026-09-25-redesign-phase7/`: the home page and the ARTIS detail page in both themes at 1440 and 390 with the menu closed and open, and `menu-opening/` with the menu opening in day mode at 1440 and 390 as PNG frames and GIFs.

## Open

- The copy rewrite, working from `docs/copy/site-copy.md`.
- Tomás to review the preview before any merge to `main`.
