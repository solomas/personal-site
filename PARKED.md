# Parked

Items deferred from earlier sessions. Each item is a known issue, decision or piece of work that has been considered and intentionally not done yet. Do not silently remove items. Removal requires explicit instruction in a session prompt.

## Current backlog

1. **Mobile and responsive polish.** The site has media queries for narrow viewports but has not been tested on phones.
2. **404 page.** No custom error page exists. The Netlify default shows instead.
3. **Favicon and Open Graph image.** The SVG favicon from the Astro scaffold is in place. No OG image exists for social sharing.
4. **Optional extras:** about page with bio and contact, tag filtering on stream index pages, site search.
5. **Metadata line on research and projects detail pages.** The work template has a metadata line (date range and organisation). Research and projects detail pages do not. Field semantics differ across collections so this needs its own design pass.
6. **Render venue, coauthors, citation, tags and links on research entries.** These fields are in the schema and populated on the PhD entry but not rendered anywhere on the detail page.
7. **Render links field on projects entries.** The links field is in the schema but not rendered. An inline link in the body works as a workaround.
8. **Paragraph spacing visual confirmation.** 1.5em is set on projects and research detail pages. The user reported it still felt close to default during this session. Re-evaluate on the live site and tune if needed.
9. **Audit Astro scoped CSS rules targeting markdown-rendered content.** The paragraph selector bug (`.entry__body p` failing because cid attributes are appended to both sides of descendant selectors, but markdown-rendered elements do not carry them) may exist in other template rules.
10. **Embed analytical model diagram from PhD proposal on the research entry.** The diagram from the proposal document is not yet on the site.
11. **Tidy PARKED.md duplication.** The main backlog and the "This session additions" section below overlap on several items. Consolidate in a dedicated pass.

## This session additions

The following items are added or confirmed parked as of the work page session:

- Mobile and responsive polish, work page and detail pages not yet tested on phones
- 404 page, Netlify default still showing
- Favicon and Open Graph image
- Education and Publications on the site, decision pending on whether they become a new collection, fold into Research, or sit on a static about page
- About or bio page, not yet decided
- Tag filtering, schema supports tags but they are not rendered anywhere
- Site search
