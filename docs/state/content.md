# Content state

Last updated: 2026-10-14

## Status

Three content streams are live with real entries. Work has nine entries rendered on the index and detail pages with full schema support including date ranges and organisation. Projects has one entry (loelens, slug `loelens` since the 2026-07-24 rename from `amsterdam-property-model`, with a Cloudflare Pages 301 from the old path in `public/_redirects`). Research is one project (the PhD at Universidade de Lisboa) told across entries. The overview "After the commitment" is the featured entry, slug `after-the-commitment` since the 2026-07-24 rename from `phd-planetary-health` (Cloudflare Pages 301 in `public/_redirects`). Its writing and tracker paragraphs moved out to become their own entries. The literature review and the conceptual paper (fragmented adoption) are now their own entries, status parked (drafted, not published, so not live but still rendered, since the research index filter is status not archived), featured false. The tracker (The Conversion Tracker) is now its own entry too, status parked, featured false. The research proposal is also its own entry, status parked, featured false, dated to the submitted proposal file (2026-05-12) so it sorts last among the parts. It links to the proposal defence deck (on branch `redesign` replaced by the EJ Fused standalone version, 2026-09-25e), a self-contained HTML slide deck at `public/after-the-commitment-proposal-defence.html` (served at `/after-the-commitment-proposal-defence.html`), which is exempt from the prose check as a generated artefact. Research is five entries in total: the overview and four parts (the research proposal, the literature review, the conceptual paper and the tracker), the four parts parked and rendered under the featured overview by date descending. The work detail page renders all schema fields. Research and projects detail pages now carry a metadata line between the title and summary (research: date and venue, projects: status), plus a fields footer below the body. Research renders tags, coauthors, citation and links. Projects renders tags and links. Every field block renders only when the field is non-empty, so all schema fields on both pages are now surfaced when populated. The research index sorts featured first, then date descending, so the featured project overview sits above its parts (the work index groups live then archived, projects is date descending, both unchanged).

On branch `redesign` the work detail page also renders tags and links when present, through the shared detail layout.

## Scope

- New content entries across projects, work and research streams
- Rendering schema fields that are populated but not yet shown on detail pages
- The metadata line (date range plus venue or organisation) on research and projects detail templates
- Static assets embedded into entries (diagrams, images)

## The five dimensions on the thesis page

The list "What each case is coded on" on /research/after-the-commitment/ comes from `src/components/CaseDimensions.astro`, which reads the dimension names from `src/data/phd-progress.json`. The file holds the five dimensions and the case names and nothing else. The site shows no status per case since 2026-10-14c, and the status, the update date and the source left the file in 2026-10-14d. To rename a dimension, change its label in the file, run `bash scripts/check-prose.sh` and `npm run build`, then commit.

## Open items

**October site review** (built 2026-10-14a, 2026-10-14b and 2026-10-14c on branch `site-review-oktober`, merged into `main` 2026-10-14 at 116f87d, done)
Training block on /about/ from `src/data/training.ts`, with links to the certificate PDFs in `public/certificates/` since 4bc225e, menu order, the deck panel off /research/ (`DeckPanel.astro` unused), the thesis panel space, the ETT summary, the contact page and `lang` on the deck. Built in 10ab6d4 to abe4f7a. Session b (07a575f to 39a7253) took the line under the home hero away again and made it the work page intro, and removed "in Dutch or English" from the contact line. Session c (b89f11a, c562f94) replaced the progress grid on the overview with the five dimensions and took "in Dutch or English" out of the contact description too. `git revert -m 1 116f87d` undoes the merge in one step. Live since 2026-10-14.

**Cleanup after the October review** (built 2026-10-14d on branch `cleanup-case-progress`, merged into `main` 2026-10-14 at 2e8b4bf, done)
`CaseProgress.astro` removed, the status per case, update date and source removed from `src/data/phd-progress.json`, and the steps for the grid in this file replaced. The case names stay in the file at Tomás's request. `git revert -m 1 2e8b4bf` undoes the merge in one step. Live since 2026-10-14.

**Thesis header panel on /research/** (built 2026-09-26f and 2026-09-26g, merged into `main` 2026-09-26 at e3d1fda, done)
The overview is the header panel of the research page instead of a dated row, built in cded20c. Its page strip shows no date and names the university once, through the programme, since 27e08f3, which also removed the dateLabel field again. `git revert -m 1 e3d1fda` undoes the merge in one step. Live since 2026-09-26.

**PhD pages, more alive** (built 2026-09-26d, merged into `main` 2026-09-26 at 43bb629, done)
A pattern switch in the overview and the fragmented adoption paper, a progress grid in the overview, updated milestone dates and texts and the lighter day paper. Built in e939f93 to 2ac446f. The timeline on /research/ was built in 0356776 and removed again in d8567a2 at Tomás's request. `git revert -m 1 43bb629` undoes the merge in one step. Live since 2026-09-26.
Open: the overview date is 3 July 2026, the proposal defence, and 1 October 2025 is the alternative. Without JavaScript, Cloudflare's email address obfuscation turns the "Request the draft" link, and the email links on the contact page, into its protection page. With JavaScript the mailto link is intact.

**Metadata line on research and projects detail pages** (done 2026-07-23)
Both detail templates now render a metadata line between the title and the summary, using the shared `.meta` typography. Research maps to date plus venue. Projects maps to status only. Research date format matches the index pages (en-GB, year plus short month). Absent fields render nothing and produce no empty separator.

**Render schema fields on research detail pages** (done 2026-07-23)
`venue` shows in the metadata line. `tags`, `coauthors`, `citation` and `links` render in a fields footer below the body on `src/pages/research/[...slug].astro`, each block only when the field is non-empty. Nothing populated is silently ignored now.

**Render links field on projects detail pages** (done 2026-07-23)
`links` and `tags` render in a fields footer below the body on `src/pages/projects/[...slug].astro`, each block only when non-empty. Links show as a list of anchors using label and url.

**Embed PhD model diagram**
The analytical model diagram from the PhD proposal is not yet on the site. The research entry at `src/content/research/after-the-commitment.md` is the target location.
Next action: source the diagram file, decide on format (SVG preferred), embed via the entry body or as a frontmatter asset.
Blocked on: having a suitable diagram file available.
