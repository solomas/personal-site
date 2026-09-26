# 2026-09-26b: Print pass across the whole site

Branch: `print-test`. Nothing went to `main`.

## Change to the design rules, requested explicitly

Tomás asked in writing to change the design rules: no blue in day, black highlights with a yellow highlighter stroke, a baked ink grain in the shapes and a clear paper grain on the ground. `docs/design/redesign-plan.md` now describes this as phase 8 and the Design tokens section of CLAUDE.md follows it. The plan also records the yellow favicon and the Geist 900 home headings, since both are now true on this branch.

## Commits

- af67d5a Plan and CLAUDE.md: phase 8, the print pass.
- 2d44484 Home headings: the ink filter is gone. The hero sentence and the three sheet titles stay in Geist 900 with plain sharp edges.
- 647cb77 Site wide: the home page test class is gone, so one set of rules covers every page. The day highlight is ink, selection is black on yellow in both themes, and links in running text carry a yellow highlighter stroke in day, 0.2em at rest and growing to 0.95em over the word on hover. Nav links show the stroke on hover and on the active link. `Shapes.astro` prints every shape as ink on every page, with the same drift and the same slow drift on detail pages. The bitmaps moved to `public/textures/` and their scripts to `scripts/textures/`. The hero lost its bold phrase, since the whole sentence is now the heaviest weight.
- fcb6f01 Paper grain: a baked 128px tile of fine even tooth, short thin fibres and a faint cloudiness, black specks on white in day and white specks on black in night at 70 percent of the day strength. It sits on the fixed shapes layer under an isolated ink group, and on the root for overscroll. The old SVG grain overlay and `--grain-opacity` are gone.
- 0d42520 Favicon and social image: `favicon.svg` is a yellow circle with a thin black rim on light browser themes and plain on dark ones. `favicon.ico` is the rimmed circle at 16, 32 and 48 pixels, drawn by `scripts/og-image/favicon.py`. `og.png` is rendered again with the paper, the ink shapes and the hero in Geist 900.
- 26ee2ae Glass blurs again. Since phase 6 the header, main and footer carried a view transition name at all times. A named element is a backdrop root, so the glass inside them blurred nothing and showed the background sharp through its fill. The paper made that visible as grain on every panel. The names now apply only while a transition runs, through a `vt-active` class set in pageswap and pagereveal. A click from a home sheet to /work/ produces the same transition layers as on `main`, the morph included.

## Data rooted and chosen values

Chosen by eye: marker 0.2em and 0.95em at 90 percent of the line box, the paper tile (mean alpha 0.048, strongest 0.188 in day, night at 70 percent), its 128px size, and everything already listed for the shapes in 2026-09-26a. Measured: every contrast figure below.

## Contrast, WCAG AA, paper counted

Worst case over zero to three overlapping shapes at full ink density, laid over the strongest paper pixel. Glass is taken over that same background, which is stricter than the real blurred glass. Text colours and surfaces come from a scan of all 22 pages in both themes.

- Day: ink on the bare ground 11.10, on glass 15.74, on sheets 21.00. Muted on glass 5.25, on sheets 7.00. Links are ink, so the same figures apply, and ink on the yellow stroke is 14.37. Selection 14.37.
- Night: white on the bare ground 14.24, on glass 14.55, on sheets 18.42. Muted on glass 5.98, on sheets 7.57. Yellow links on the bare ground 9.75, on glass 9.96, on sheets 12.61. Selection 14.37.
- The darkest bare pixel measured in day gives 14.77 for black text, the lightest in night gives 15.53 for white and 10.63 for yellow, all inside the worst case.
- The scan found no blue anywhere in day on any page. Night keeps its blue shapes and yellow highlight.

## Performance

390 wide, 3x density, 4x CPU slowdown, 10 seconds per theme in headless Chrome, with the glass blur working: home and /work/artis/ both run at 60 fps, frame gap median 16.7ms, worst 18.6ms on home and 18.7ms on the detail page, no paint during the drift and no main thread task over 50ms. `main` gives a worst of 17.7ms and 17.8ms. The extra millisecond is the glass blur, which `main` skips because of the backdrop root bug. Page load on both pages: 2 to 5ms of paint and a longest task of 21 to 23ms, the same as `main`.

## Checks

- `bash scripts/check-prose.sh` and `npm run build` pass after every commit.
- `~/Documents/personal-site-screenshots/2026-09-26-print-site/`: home, /research/ and /research/after-the-commitment/ in both themes at 1440 and 390, 2x crops of the email link in the sentence on the contact page at rest and on hover, and of bare background, in both themes, the 1x viewports used to find the bare patch, and the four traces.
- No content entry has a link inside its body text, so the link crop uses the contact page.
- Headless Chrome cannot return a full 2x screenshot while the textured shapes move, so the 2x crops hold the shapes still. Tomás's own Chrome runs at 2x, but its tab was in the background and did not render, so the retina check remains open.

## Open

- Tomás reviews the preview, on a phone and on a retina screen.
- The backdrop root fix also belongs on `main`, where the glass has not blurred since phase 6.
- Decide whether the hero needs another way to stress "after a plan is signed".
