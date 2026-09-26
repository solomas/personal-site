# 2026-09-26f: The thesis as the header panel of the research page

Branch: `thesis-header`, from `main` at c3631df. Nothing went to `main`.

## What changed

- cded20c: the thesis overview leaves the dated list on /research/ and becomes a wide glass header panel under the title and intro, above the deck panel, in `src/components/ThesisPanel.astro`. From top to bottom: "The thesis", "After the commitment:" at the size of the page titles with the rest of the title smaller below it, the summary and a "Read the research" action. The whole panel is one link to /research/after-the-commitment/, with no date. It lifts on hover and focus as the home sheets do, sets the strong focus effect (0.4 and 2px blur, no blur under reduced motion) on the rest of the page while it is active, and morphs into the thesis page's strip in the page transition. The deck panel and the rows keep the light focus effect.
- The research schema gains an optional `dateLabel` that the detail page strip shows in place of the date. The overview sets it to "Doctoral research, University of Lisbon". Its date field stays in the file because the schema requires it and is shown nowhere.
- `docs/design/redesign-plan.md` and `docs/copy/site-copy.md` describe the panel and the strip.

Nothing else changed: the deck panel, the other parts with their order and dates, the switch, the grid, the texts and the paper grain.

## Checks

- Contrast, worst case over the shapes and the paper under the glass: "The thesis" 5.33 in day and 5.98 in night, title and summary 15.99 and 14.55, "Read the research" 18.58 and 14.59, the focus ring 15.99 and 9.96. The hairline ring of the action pill is 1.31 and 1.54, as on the deck panel. It is decoration, since the whole panel is the link.
- Keyboard: the panel is one tab stop after the bar, and Enter opens the thesis page with the morph into its strip.
- `bash scripts/check-prose.sh` and `npm run build` pass.
- `~/Documents/personal-site-screenshots/2026-09-26-thesis-header/`: /research/ and the strip of /research/after-the-commitment/ in both themes at 1440 and 390.

## Open

- The strip now reads "research · Doctoral research, University of Lisbon · Doctoral Programme in Planetary Health Studies, Universidade de Lisboa", so the university appears twice. Dropping the venue from the strip would remove the repeat.
- Tomás reviews the preview and decides on the merge.
