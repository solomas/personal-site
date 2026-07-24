# Content state

Last updated: 2026-07-24

## Status

Three content streams are live with real entries. Work has nine entries rendered on the index and detail pages with full schema support including date ranges and organisation. Projects has one entry (loelens, slug `loelens` since the 2026-07-24 rename from `amsterdam-property-model`, with a Cloudflare Pages 301 from the old path in `public/_redirects`). Research is one project (the PhD at Universidade de Lisboa) told across entries. The overview "After the commitment" is the featured entry, slug `after-the-commitment` since the 2026-07-24 rename from `phd-planetary-health` (Cloudflare Pages 301 in `public/_redirects`). Its writing and tracker paragraphs moved out to become their own entries. The work detail page renders all schema fields. Research and projects detail pages now carry a metadata line between the title and summary (research: date and venue, projects: status), plus a fields footer below the body. Research renders tags, coauthors, citation and links. Projects renders tags and links. Every field block renders only when the field is non-empty, so all schema fields on both pages are now surfaced when populated. The research index sorts featured first, then date descending, so the featured project overview sits above its parts (the work index groups live then archived, projects is date descending, both unchanged).

## Scope

- New content entries across projects, work and research streams
- Rendering schema fields that are populated but not yet shown on detail pages
- The metadata line (date range plus venue or organisation) on research and projects detail templates
- Static assets embedded into entries (diagrams, images)

## Open items

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
