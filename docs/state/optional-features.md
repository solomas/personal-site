# Optional features state

Last updated: 2026-05-15

## Status

No optional features have been built. The three content streams (projects, work, research) are live with real entries. Navigation beyond the three stream index pages, filtering, search and identity pages are all absent. Each item below needs a scoping decision before any build work starts.

## Scope

Features that require a product decision before build: pages and interactions that are not essential for the site to function but would improve discoverability or completeness.

## Open items

**About page**
No about page or bio exists. The site has no page that introduces Tomás directly. Decision needed: standalone `/about` route, or fold contact and bio into the homepage?
Next action: decide on scope and route, then draft copy.

**Tag filtering on stream index pages**
Tags are in the schema for all three collections and populated on at least the research entry. They are not rendered anywhere. Filtering by tag is not implemented.
Next action: decide whether to render tags as static labels first (without filtering) or build filtering from the start.

**Site search**
No site search exists. With few entries this is low priority. As content grows it becomes more useful.
Next action: revisit when entry count exceeds roughly 15 across all streams.

**Education and publications placement**
Academic credentials (degrees, publications) are not represented on the site. Decision pending: new `education` collection, fold into the research stream using a `type` field, or list on a static about page.
Next action: decide placement before creating any files. This decision affects the schema and the nav.
