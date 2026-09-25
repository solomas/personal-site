# 2026-09-25d: Redesign phase 4, primary colours, red mark, stripe

Branch: `redesign`. Nothing went to `main`.

## Commits

- fb6ac97 Plan and CLAUDE.md: `docs/design/redesign-plan.md` and the Design tokens section describe the primaries and their roles, the red mark, the two shapes, the stripe and focus on hover for all entries.
- 9881158 Palette: blue #0033A0, red #E30613, yellow #FFD100. Day has a white ground with blue leading (links, active nav link, focus ring, selection in white on blue) and yellow only as a shape colour. Night has a black ground with yellow leading (selection in black on yellow) and blue only as a shape colour. One red dot after the name in the nav. `favicon.svg` and `favicon.ico` (16, 32 and 48px) are the same red dot on a transparent ground.
- bb5a2fa Background: two soft round shapes in the theme's shape colour, same drift rules, grain kept.
- b26bd50 Focus on hover for every highlight: one shared rule set in `global.css` with `.focus-item`, `.focus-panel` and `.focus-context`. The home sheets use the strong version (40 percent, 2px) through `data-focus="strong"`. Rows, the Other work toggle and cards, and the deck panel use the light one (60 percent, 1px).
- 51eedc3 Footer: "Built in the open." removed.
- ce995f2 Experiment, revert to drop: the 70s stripe and larger corners (panels 32px, rows 14px).
- 99371de The red dot keeps a 2px ground ring, and the focus effect dims the nav's contents rather than the nav as a whole, so the dot never blends into orange over the yellow shape.

## Night glass

Plain white at 8 percent left muted text at 3.59:1 over the blue shape. The fill is now rgba(41, 41, 41, 0.494): over black it gives #141414, the same as white at 8 percent, and over blue it darkens the shape so muted text reaches 5.36:1. Raising a white fill would have lowered the contrast further.

## Shapes never overlap

Shape A sits at 18vw by 20vh, shape B at 50vw by 78vh, each up to 52 by 44 vmin and at most 560px wide, drifting within 3vw, 4vh, 4 percent scale and a few degrees. Checked at every keyframe step at 1440x900, 1000x1000, 390x844, 360x640, 768x1024, 1280x600, 1280x720, 1920x1080, 2560x1080 and 3840x2160. The smallest gap is 34px at 1000x1000, measured to the transparent rim. Neither shape enters the right gutter.

## The stripe

Text on the stripe fails in one theme or the other: ink on blue is 1.98:1 in day, ink on yellow is 1.46:1 in night. So the stripe is confined to the right gutter beside the 1100px content column, where no text or glass ever lies, and shows only from 1340px wide, where that gutter is at least 120px. The stripe does not appear on phones or narrower windows.

## Contrast, WCAG AA

Day: ink 12.91 to 21.00, blue 6.52 to 10.60 (bare over the yellow shape with grain at its worst, up to on white), muted 5.57 to 7.00 on glass and sheets. Selection 10.60, focus ring against the ground 10.60.

Night: ink 9.19 to 21.00, yellow 6.29 to 14.37, muted 4.94 to 7.57 on glass and sheets (4.94 is glass over the blue shape with grain at its lightest). Selection 14.37, focus ring 14.37.

Faded content during focus on hover: 5.74 (day) and 7.37 (night) for the light version, 2.85 and 3.66 for the strong home version. The strong fade is deliberate and lasts only while a sheet has hover or focus.

## Colour checks

- Red: in all 92 screenshots the only red pixels sit in one 7 to 8px box, the nav dot. Red appears once per page. The proposal defence deck is a separate page outside the layout, so it has no nav and no red dot.
- Green and orange: the first scan found orange in the anti aliased edge of the red dot where the day nav glass lies over the yellow shape, 8 pixels at rest and up to 95 while the nav was dimmed. Fixed in 99371de. The final scan of all 92 screenshots finds no orange and no green pixels.

## Performance

Home at 390 wide, 4x CPU throttling, 10 seconds, both themes: 600 frames in 10 seconds, 60 fps, frame gap median 16.7ms, worst 17.9ms, no main thread task over 50ms. Headless Chrome on a Mac, not a real phone.

## Checks

- `bash scripts/check-prose.sh` clean and `npm run build` passes after each commit.
- 92 screenshots and two traces in `~/Documents/personal-site-screenshots/2026-09-25-redesign-phase4/`: every page in both themes at 1440 and 390, the home with a sheet hovered, with reduced motion and with reduced transparency, a work row hovered and the deck panel hovered.

## Open

- Decide whether the stripe stays. It is one commit (ce995f2), together with the larger corners.
- Hover, focus and the drift on a real phone.
- Tomás to review the preview before any merge to `main`.
