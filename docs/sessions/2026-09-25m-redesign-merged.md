# 2026-09-25m: Redesign merged into main

Branch: `main`, merged from `redesign`. The `redesign` branch is kept.

## What changed

- 0c748df on `redesign`, before the merge: the css row of STATE.md no longer says global.css lacks reduced motion handling, and README.md names the streams Projects, Work and Research. Both edits were asked for explicitly in this session's prompt. The STATE.md edit overrides the CLAUDE.md rule that STATE.md changes only when the workstream structure changes, for this session only.
- 690a8ee on `main`: `redesign` merged with a merge commit (`git merge --no-ff`), so `git revert -m 1 690a8ee` undoes the whole redesign in one step. `main` had no commits of its own since the branch was cut. Pushed to origin/main.
- State docs updated for the merge: polish.md (live domain, 404 and social preview done, triptych smoketest obsolete), css.md (redesign merged, phase 7 done), optional-features.md (about page done).

## Live checks on tomasvangorp.com

Cloudflare Pages deployed `main` about 90 seconds after the push.

- Home page shows the new hero sentence "I research what happens after a plan is signed, and help organisations make it work.": pass.
- /about/ returns 200 with the new text: pass.
- An unknown address (/this-page-does-not-exist/) returns 404 with "Page not found": pass.
- /og.png returns 200 as image/png: pass.
- /sitemap.xml returns 200 with 22 URLs: pass.
- /projects/amsterdam-property-model/ and the version without a slash return 301 to /projects/loelens/: pass. /research/phd-planetary-health/ still returns 301 to /research/after-the-commitment/.

## Open

- Hover, focus, the menu, the transitions and the drift on a real phone and in Safari.
- STATE.md key open items column still lists the 404 page, the OG image and the triptych smoketest as open. It was left alone beyond the one line this session was asked to change.
