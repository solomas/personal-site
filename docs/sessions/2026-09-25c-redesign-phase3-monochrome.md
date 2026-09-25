# 2026-09-25c: Redesign phase 3, monochrome, drifting shapes, focus on hover

Branch: `redesign`. Nothing went to `main`.

## Commits

- a0b9ef9 Plan and CLAUDE.md: `docs/design/redesign-plan.md` now describes the monochrome palette, the drifting shapes, the grain, the focus on hover and the new motion rules. The Design tokens section of CLAUDE.md matches.
- a2b1124 Palette: day and night greys, glass at 55 percent, solid reading sheet. No accent colour anywhere. Selection inverts ink and ground, links are underlined ink, the active nav link is bold with aria-current, focus is a 2px ink ring inside a 2px ground ring.
- 4d90f4d Background: `Shapes.astro` replaces `Folds.astro`. Five soft rounded shapes built from radial gradients, drifting on transform only, cycles of 67, 83, 97, 109 and 118 seconds, three times slower on detail pages. Paused while the tab is hidden, still with reduced motion. A static noise tile sits over the shapes and under the glass.
- dbca9bd Focus on hover on the home page: the other sheets, the hero, the nav and the footer fade to 40 percent and blur 2px over 250ms. The active sheet lifts. Hover only on hover devices, keyboard focus everywhere, fade without blur under reduced motion, nothing without `:has()`.
- f7600ef Research page: a glass panel under the page title links to the proposal defence deck. Title and link label come from the research proposal entry.

## Contrast, WCAG AA

Day: ink 9.68 to 21.00. Muted 5.08 to 7.00 on glass and sheets. Bare muted drops to 3.23 over the darkest shape, so muted text stays on glass or sheets. With the grain at its darkest over the darkest shape, muted on glass is 4.89.

Night: ink 10.37 to 21.00. Muted 6.94 to 8.63 on glass and sheets. Bare muted drops to 4.26 over the lightest shape. With the grain at its lightest over the lightest shape, muted on glass is 6.54.

Faded content during the focus on hover reaches 2.81 in day and 3.66 in night. This is deliberate and lasts only while another sheet has hover or focus.

## Grain and banding

Night home page, same region with and without grain: the mean run of identical pixel values along a row drops from 5.1 to 1.6 pixels, the longest from 331 to 57. The grain breaks the flat steps up.

## Performance

Chrome DevTools protocol trace, home page at 390 wide, 4x CPU throttling, 10 seconds, day and night. 600 frames drawn in 10 seconds, frame gap median 16.7ms, p95 17.2ms, worst 19.1ms. No main thread task over 50ms. The drift runs on the compositor, so CPU throttling barely touches it. This ran in headless Chrome on a Mac. A low end phone GPU pays more for the glass blur over moving shapes and is not measured here.

## Choices not in the prompt

- Five shapes, their sizes, paths and positions, the grain strength (5 percent day, 6 percent night) and the grey steps between the given extremes are chosen by eye.
- The deck panel sits under the research title and intro, not above the title, so the page still opens with its heading.
- The home sheet lift on hover now only fires on hover devices, so it no longer sticks on touch.
- Row hover in the index panels is a lighter row and an underlined title, since the yellow edge is gone.

## Checks

- `bash scripts/check-prose.sh` clean and `npm run build` passes after each commit.
- 88 screenshots in `~/Documents/personal-site-screenshots/2026-09-25-redesign-phase3/`, plus the two trace files. Full page captures show the fixed background on the first screen only, a capture artefact.

## Open

- Hover, focus and the drift on a real phone.
- Tomás to review the preview before any merge to `main`.
