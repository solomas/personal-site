# 2026-09-26a: Print test on the home page

Branch: `print-test`, from `main` at 94c2f20. Nothing went to `main`. This is a test and not part of `docs/design/redesign-plan.md`, which is unchanged.

## Override of CLAUDE.md, this session only

The design tokens section of CLAUDE.md names blue #0033A0 as the day highlight. Tomás asked explicitly for a day home page without blue for this test. The override covers the home page on this branch only. Every other page keeps the blue highlight.

## What changed

- `Layout.astro` takes a `print` prop that puts the class `print` on the root. Only the home page sets it. The build of every other page is byte identical to `main`, checked by comparing both `dist` folders: only `index.html`, one new CSS file for the home page and `public/print/` differ.
- Day without blue on the home page: links, the active state and the focus ring turn ink. Selection is ink on yellow. The footer link carries a yellow highlighter stroke under the lower half of the word instead of an underline, which grows over the whole word on hover. Menu links show the stroke on hover. Night keeps its yellow highlight and blue shapes.
- Shapes as ink: each shape is a block of the shape colour cut by a bitmap mask with a slightly ragged, short rim and a faint unevenness inside, and covered by a grain tile in the ground colour with fine specks of transparency, so the colour itself breaks up. The shapes multiply with each other, so overlaps turn deeper, and the shapes layer drops its ground so the multiply does not blacken the night shapes. Strength 0.42, a little above the 0.33 of `main` because the grain takes out about a fifth of the colour. The drift animates only transform, as before.
- Headings as printed letters: the hero sentence and the three sheet titles in Geist 900, with a static SVG filter that frays the edges by about a pixel and leaves a light speckle in the letters. The filter sits on an inner span in the hero, so the focus on hover blur on the heading still works. The text stays real text.
- `public/print/`: four shape masks and two grain tiles, 187 KB together. The home page loads the four masks and one tile, about 146 KB. `scripts/print-test/` holds the scripts that bake them, `build.sh` runs them all and reproduces the files byte for byte.

## Data rooted and chosen values

Chosen by eye: the shape strength 0.42, every value inside the mask and grain scripts (blur, wobble, rim noise, edge steepness, mottle, grain density 0.5 to 1 with a mean of 0.79), the heading filter (fray 1.1px, speckle alpha 0.72 to 1), the marker height 0.42em and 0.95em on hover. Derived from the existing shapes: the ellipses in the masks follow the radial gradients in `Shapes.astro`, at the radius where the old soft rim crossed half strength.

## A route that did not work

The first build baked the grain into SVG masks and later used a repeated tile as a mask or with a blend mode. Headless Chrome could not take a full 2x screenshot of the home page with any of them, while the 2x trace still ran at 60 fps with no repaints. Bitmap masks and a plain repeated background kept the trace clean, but the full 2x screenshot still stalls in headless Chrome whenever the shapes carry the grain. Small 2x clips work, so the 2x crops were taken as clips. Whether a real retina screen shows any delay on first paint is not yet checked.

## Contrast, WCAG AA

Worst case over zero to three overlapping shapes at full ink density, with the static grain at its most harmful and heading ink at the lowest density the filter leaves (0.84):

- Day: hero heading 9.61, ink on the background 12.30, footer link (ink) 12.30, ink on glass 12.11, muted on glass 5.49, ink on the yellow marker and the selection 14.37.
- Night: hero heading 11.08, ink on the background 15.24, yellow link on the background 10.43, ink on glass 11.01, muted on glass 6.19, black on the yellow selection 14.37.

The backgrounds measured from the screenshots stay inside that worst case. No pair fails. A computed style scan found no blue on the day home page, and `/work/` still carries its blue.

## Performance

Home at 390 wide, 3x density, 4x CPU slowdown, 10 seconds per theme in headless Chrome on a Mac: 60 fps in both themes, frame gap median 16.7ms and worst 17.7ms, no paint during the drift and no main thread task over 50ms. `main` measured the same way gives the same figures. Page load: 5 to 7ms of paint in total and a longest task of 29ms, against 24ms on `main`.

## Checks

- `bash scripts/check-prose.sh` clean. `npm run build` passes.
- `~/Documents/personal-site-screenshots/2026-09-26-print-test/`: the home page in both themes at 1440 and 390, 2x crops of the hero, the Work sheet title and a shape rim in both themes, the 1x viewports used to find the rims, and both traces.

## Open

- Tomás judges the texture on the preview and on a real phone and retina screen. Check first paint on a retina screen given the headless stall.
- The hero phrase "after a plan is signed" lost its emphasis, because the whole sentence is now the heaviest weight.
- Keep, change or drop the test. If it stays, the plan and the CLAUDE.md token section need the day highlight change.
