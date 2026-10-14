# 2026-10-14d: October review merged, progress grid cleaned up

## Merge

Tomás approved the October site review. `site-review-oktober` went into `main` with `git merge --no-ff` at 116f87d and was pushed. `git revert -m 1 116f87d` undoes it in one step.

Checked on https://tomasvangorp.com after the deploy, about a minute later: home, research, the overview, work, projects, about, contact and the ETT page return 200, and the four certificate PDFs return 200 as application/pdf. The overview shows "What each case is coded on" and none of the old grid text. The menu reads Research, Work, Projects, About, Contact. The home page has no line under the hero and /research/ no deck panel. About has the Training block with its certificate links. The work page has the new intro and the ETT summary its new opening. The contact page has the new sentence and the description without "in Dutch or English". The first fetch of the contact page came back from an older cache. A second fetch showed the new page.

## Cleanup

Branch `cleanup-case-progress`, from `main` at 116f87d. Not merged: Tomás reviews it first.

- 4b3ca5c: `src/components/CaseProgress.astro` removed. `src/data/phd-progress.json` keeps the five dimensions and the case names. The status per case went, and with it "updated" and "source", which dated and sourced that status. The comment in `CaseDimensions.astro` no longer mentions the status.
- The section on updating the grid in `docs/state/content.md` is now a short section on the five dimensions. `docs/copy/site-copy.md` names the list instead of the grid in the overview entry.

## Checks

- `bash scripts/check-prose.sh` and `npm run build` pass, 22 pages. The overview still shows the five dimensions.

## Left as is

- `docs/design/redesign-plan.md` still describes the progress grid as planned in September. It is a plan, not current state, so it stays.
- The case names in `phd-progress.json` are not used on the site. They stay as the cheaper choice to undo.
- `DeckPanel.astro` stays unused, as before. It was not part of this cleanup.
