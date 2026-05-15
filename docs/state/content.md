# Content state

Last updated: 2026-05-15

## Status

Three content streams are live with real entries. Work has nine entries rendered on the index and detail pages with full schema support including date ranges and organisation. Projects has one entry (Amsterdam property model). Research has one entry (PhD at Universidade de Lisboa). The work detail page renders all schema fields. Projects and research detail pages do not: several fields (metadata line, venue, coauthors, citation, tags, links) are in the schema and populated but not displayed on the page.

## Scope

- New content entries across projects, work and research streams
- Rendering schema fields that are populated but not yet shown on detail pages
- The metadata line (date range plus venue or organisation) on research and projects detail templates
- Static assets embedded into entries (diagrams, images)

## Open items

**Metadata line on research and projects detail pages**
Work detail pages show a yellow metadata line with date range and organisation. Research and projects detail pages have no equivalent. Field semantics differ across collections: research has `venue` and `coauthors`, projects has no direct organisation field. This needs a design pass before implementation.
Next action: decide field mapping for each stream, then add the metadata line to the two templates.

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
