# 2026-09-25e: Redesign phase 5, two colours, bolder shapes, menu, about

Branch: `redesign`. Nothing went to `main`.

## Commits

- be574ba Plan and CLAUDE.md: two surface colours per theme, no red, no stripe, bolder shapes on a shared clock, the collapsed menu and the about page.
- 9d63fe3 Colours: day is white with yellow shapes and a blue highlight, night is black with blue shapes and a yellow highlight. Red and the stripe are gone, the larger corners stay. The token `--color-lead` is now `--color-highlight`. `favicon.svg` is a circle, blue on light browser themes and yellow on dark ones through a media query inside the SVG. `favicon.ico` is a blue circle at 16, 32 and 48px.
- 066837d Shapes: four large stretched shapes, solid through most of their radius with soft rims, free to overlap, smaller on tall narrow screens. A virtual clock in sessionStorage sets a negative animation delay before first paint, so the shapes carry on across pages. It advances at a third of the speed on detail pages, so moving between normal and detail pages never makes them jump. With nothing stored it starts from the wall clock.
- 64a2732 Navigation: the home bar shows the name and the theme button only. Other pages fold Projects, Work, Research, About and Contact behind a Menu button: aria-expanded and aria-controls, Tab moves from the button straight into the links, Escape closes and returns focus. Without JavaScript the links stay open and the button stays hidden.
- 1ce9e41 Shapes keep their base tilt under reduced motion. The tilt had lived only in the keyframes.
- 732db44 About page on a new `ReadingLayout`, the frame the detail pages now share. The approved text as given, ending with a link to /contact/. The detail pages render pixel identical to before the refactor.
- 29dd685 The proposal defence deck replaced with the EJ Fused standalone version, same file name.

## Contrast, WCAG AA

The colours match phase 4 and the figures were already taken at full shape colour, so they hold for the bolder shapes. Day: ink 12.91 to 21.00, blue 6.52 to 10.60, muted 5.57 to 7.00 on glass and sheets. Night: ink 9.19 to 21.00, yellow 6.29 to 14.37, muted 4.94 to 7.57 on glass and sheets. The lowest night value is muted text on glass over the blue shape with the grain at its lightest. No pair fails, so no glass changed. The strong home fade still drops to 2.85 and 3.66 on purpose while a sheet has hover or focus.

## Red

None in the site source, none in any of the 100 screenshots, and the favicons are blue and yellow. The deck is the exception: it uses #E30613 once, for the phrase "substantive institutional conversion" in the research question slide, plus two unused references in its own colour settings. The file is published as given.

## The deck

1,013,124 bytes. Loaded in headless Chrome, it made no request outside the site: the page itself plus bundled blob and data resources, with no console errors. Fonts, Three.js and images are bundled inside the file. Its source still names outside addresses that are not fetched: a jsDelivr copy of Three.js that loads only if the bundled one fails, and preconnect hints to fonts.googleapis.com and fonts.gstatic.com. The source path in the brief had a colon where the folder `[01] Oral defence July` ends, and the file was taken from inside that folder.

## Performance

Home at 390 wide, 4x CPU throttling, 10 seconds per theme: 60 fps in both, frame gap median 16.7ms, worst 22.3ms in day and 17.8ms in night, no main thread task over 50ms. Headless Chrome on a Mac.

## Checks

- `bash scripts/check-prose.sh` clean and `npm run build` passes after each commit.
- 100 screenshots and two traces in `~/Documents/personal-site-screenshots/2026-09-25-redesign-phase5/`: every page including /about/ in both themes at 1440 and 390, the menu open at 1440 and 390 in both themes, the home with a sheet hovered, with reduced motion and with reduced transparency, a work row hovered and the deck panel hovered.

## Open

- Hover, focus, the menu and the drift on a real phone.
- The about text is a placeholder, to be rewritten.
- Tomás to review the preview before any merge to `main`.
