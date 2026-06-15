# 2026-06-15b: Inner-page motion, flip-theme polish and a site audit

Four commits landed across paragraph spacing, the triptych flip-theme ground, the homepage heading and inner-page motion. A read-only site audit also ran, and its findings sit below as a backlog reference.

## What changed

**Work detail paragraph spacing (6d31d4a)**
`work/[...slug].astro` targeted `.entry__body p` without `:global()`. Astro scoped the rule with a cid, the markdown-rendered `<p>` carried no cid, so the rule never matched and global `* { margin: 0 }` left work-entry paragraphs with no gap. Changed the selector to `.entry__body :global(p)`, matching the projects and research templates. This closed the one known instance of the cid-attribute scoping bug.

**Triptych flip-theme panel ground (df94f10)**
The flip-theme `--tri-ground-*` tokens were all pure black, identical to the page, so the panel had no separation from the background. Lifted `--tri-ground-hi` to `#2a2620` and `--tri-ground-mid` to `#1a1712`, leaving `--tri-ground-lo` at pure black so the arch edge still meets page-black at the gild line. This mirrors how the yellow theme sets a deeper ground against its bright page. The change stayed inside the fixed-palette exception. The art and gild were untouched.

**Homepage heading colour (1e76c26)**
`.home__name` ("Three ways in") used the gold accent token in the flip theme, which sat close to the triptych yellow. Added a scoped `[data-theme="flip"] .home__name { color: #ffffff }` override. The yellow theme keeps the black accent, readable on the amber page.

**Inner-page motion (569e43f)**
Added a settled `--ease-out` token to `tokens.css`, the same curve as the homepage arch hover. Applied a quiet version of the arch language across the stream index pages, contact and the three detail templates. Entry rows and cards lift a few pixels on hover with a gilt left edge drawn in reserved left padding, so it never overlaps text or shifts layout. Entry lists and detail articles fade up on load with a light per-item stagger. Every touched page carries a `prefers-reduced-motion` guard that removes the transforms and the reveal. The homepage and Triptych were not touched.

## Site audit, backlog reference

A read-only audit ran this session. Items still open, not actioned:

- Research and projects detail pages drop populated schema fields (`venue`, `coauthors`, `citation`, `tags`, `links`). Tracked in content.md.
- About-page decision still open. Tracked in optional-features.md.
- Default theme is yellow, but the recent work treats the black flip theme as the primary look. Whether to flip the default is a design call.
- Fonts load three families from Google at ten weights, render-blocking. Trimming to the weights actually used is the clearest performance win.
- Contact email `hello@tomasvangorp.com` is unverified against the live host. Confirm the mailbox resolves.
- The triptych door turn, hover lift and paint cost were never confirmed in a browser. A smoketest across both themes and on a phone is the highest visual-risk gap.

## Open

- Broader cid-attribute scoping sweep of all three detail templates still not done. The `p` instances are resolved, other tag elements are not swept. See css.md.
- `global.css` has no global `prefers-reduced-motion` handling. The new inner-page motion is guarded per page instead.
- Triptych browser smoketest. See polish.md.

## Commits

- 6d31d4a work detail paragraph spacing
- df94f10 triptych flip-theme panel ground lift
- 1e76c26 homepage 'Three ways in' white in flip
- 569e43f inner-page motion

## Note on protocol

This session updated STATE.md although no workstream structure changed, because the session prompt explicitly asked to update it. The change was limited to the Last updated line and two row summaries in the bucket table. Explicit single-session override, recorded here, matching the 2026-06-15a precedent.
