# 2026-09-25b: Redesign phase 2, folded layers

Branch: `redesign`. Nothing went to `main`. Built from `docs/design/redesign-plan.md`.

## Commits

- d9e7bd1 CLAUDE.md: the Design tokens section now describes the folded layers design, and the close protocol verifies a push against the origin of the current branch. Both edits approved by Tomás for this session.
- 3a2b3e3 Phase 2A, foundation. Mist and night tokens, legacy and unused tokens removed. Geist self-hosted in `public/fonts/` (variable roman and italic from vercel/geist-font v1.7.2, SIL Open Font License 1.1, licence text in `public/fonts/OFL.txt`). Inter, Geist Mono and `Fonts.astro` removed. Still folded background in `Folds.astro`. Glass classes (`.glass`, `.glass-panel`, `.sheet`) with solid fallbacks through `@supports` and `prefers-reduced-transparency`. Glass navigation in `Layout.astro`. Theme follows the system on the first visit.
- df952e6 Phase 2B, layout. Home with three overlapping glass sheets (`HomeSheets.astro`, replaces `Triptych.astro`). Index pages with title, intro and one glass panel, Other work as a disclosure inside the panel. One detail layout for all collections, work now shows tags and links. Contact as one glass panel. `SectionLabel.astro` and `StreamTag.astro` removed. Shared `.glass-button` class.

## Contrast, WCAG AA

Measured with the WCAG formula on the plan colours. Glass and sheet are composited over the three background tones: ground, fold light (lightest) and fold shadow (darkest). The folds never go outside that range, and blur only averages within it.

Mist: ink 10.50 to 15.67. Muted 5.07 to 6.10 on glass and sheets, 5.30 bare on ground, 4.09 bare on fold shadow (fails, so bare text always uses ink). Accent against any mist surface 1.11 to 1.34, so the accent carries no text in mist.

Night: ink 13.47 to 17.36. Muted 5.65 to 7.28. Accent as text 10.87 to 14.02.

Selection text on yellow: 11.73 in mist, 12.99 in night. Focus: the inner ring gives 10.50 or more in mist, the yellow ring 10.87 or more in night.

## Where the build departs from the plan

- Focus rings in mist get an inner ink ring. Yellow alone reaches only about 1.2 to 1.3 against the mist surfaces, below the 3:1 WCAG asks for focus indicators.
- The active nav marker stays yellow, and the active link also turns semibold with `aria-current`, for the same reason.
- Muted text only sits on glass or sheets. Page intros, the back link, the footer and the hero sit bare on the background and use ink.
- The flip button stores "mist" when the visitor picks mist. Without that, a visitor on a dark system could not keep mist. "flip" still means night.
- The navigation floats at the top of the page but is not fixed. A fixed glass bar would pass over body text and lose contrast.
- The night glass bottom edge is chosen (fold shadow at 60 percent). The plan names none.
- The theme hint pulse and the load animations on index, detail and contact pages are gone, since the plan allows only the home settle.
- The Other work hover preview of titles is gone. Other work is now a native disclosure inside the panel.
- Without JavaScript every visitor gets mist. The system setting is read by the head script.

## Chosen values, not from data

Glass blur 18px, the sheet shadows, the row hover tint, the stack step (9 percent, 4 percent on phones) and overlap, the fold positions and blur radii, and the fluid title sizes. Each is marked in the code.

## Checks

- `bash scripts/check-prose.sh` clean and `npm run build` passes after each commit, 20 pages.
- Screenshots, full page, through the Chrome DevTools protocol with media emulation: every page in mist and night at 1440 and 390, plus the home with reduced motion and with reduced transparency in both themes. 84 files in `~/Documents/personal-site-screenshots/2026-09-25-redesign-phase2/`. Headless Chrome windows stop at 500px, so the first attempt with plain window sizes was thrown away.
- In the full page screenshots the folded background covers only the first screen, because a fixed element does not repeat in a capture beyond the viewport. In a browser it stays behind the content while scrolling.

## Open

- Night background: the soft fold shadows show visible banding steps in the darkest area, because the dark tones leave few colour levels to blend. Check on a real screen, then soften or narrow the shadow if needed.
- Hover, focus and the home settle animation checked in code only, not in a browser.
- Tomás to review the preview and approve before any merge to `main`.
