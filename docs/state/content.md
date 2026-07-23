# Content state

Last updated: 2026-07-23

## Status

Three content streams are live with real entries. Work has nine entries rendered on the index and detail pages with full schema support including date ranges and organisation. Projects has one entry (Amsterdam property model). Research has one entry (PhD at Universidade de Lisboa). The work detail page renders all schema fields. Research and projects detail pages now carry a metadata line between the title and summary. Research shows date and venue. Projects shows status. Still not rendered on those two pages: tags, coauthors, citation and links on research, and tags and links on projects.

## Scope

- New content entries across projects, work and research streams
- Rendering schema fields that are populated but not yet shown on detail pages
- The metadata line (date range plus venue or organisation) on research and projects detail templates
- Static assets embedded into entries (diagrams, images)

## Open items

**Metadata line on research and projects detail pages** (done 2026-07-23)
Both detail templates now render a metadata line between the title and the summary, using the shared `.meta` typography. Research maps to date plus venue. Projects maps to status only. Research date format matches the index pages (en-GB, year plus short month). Absent fields render nothing and produce no empty separator.

**Render schema fields on research detail pages**
`phd-planetary-health.md` populates `venue`, `coauthors`, `citation`, `tags` and `links`. None are rendered on `src/pages/research/[...slug].astro`. The body text shows. The structured fields above it are silently ignored.
Next action: add rendering for each field to the research detail template.

**Render links field on projects detail pages**
`links` is in the projects schema but not rendered on `src/pages/projects/[...slug].astro`. An inline link in the body works as a workaround for now.
Next action: add a links block to the projects detail template.

**Embed PhD model diagram**
The analytical model diagram from the PhD proposal is not yet on the site. The research entry at `src/content/research/phd-planetary-health.md` is the target location.
Next action: source the diagram file, decide on format (SVG preferred), embed via the entry body or as a frontmatter asset.
Blocked on: having a suitable diagram file available.
