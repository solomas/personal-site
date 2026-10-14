# 2026-10-14a: October site review, training block and fixes

Branch: `site-review-oktober`, from `main` at a2b42dc. Nothing went to `main`. The full report for Tomás, in Dutch, is `REVIEW-oktober-2026.md` in the repo root.

## What changed

- 10ab6d4: a Training block on /about/ after the education paragraph, rendered from the new `src/data/training.ts`. Two courses from the certificates in Drive (PhD/extra/Certificates): Climate and Health Medicine (Global Consortium on Climate and Health Education and European Network on Climate and Health Education, 2026) and the ISGlobal International Spring School in Global Health (2026) with modules 2, 3 and 5 as one item. The 2º Congresso Nacional da Saúde e Ambiente sits in the data file as a commented line.
- 58c12ec: the menu reads Research, Work, Projects, About, Contact.
- 121b9d7: a line under the home hero on the PhD, the board work at ETT and the programmes for ARTIS and InScience.
- 36a69c8: the deck panel left /research/. The proposal shows once, as its list item, and its page keeps the link to the slides. `src/components/DeckPanel.astro` stays, unused.
- 460bb50: a space between "After the commitment:" and the rest of the title in the thesis panel. It shows only in the link text, screen readers and copied text, since the parts sit in a column.
- 4a90ee9: the ETT summary opens with "An assignment through my own practice, TOMICA." The body is unchanged.
- 93670e3: the contact page names the address once (the Email button went), adds a line on consulting projects and research collaborations in Dutch or English, and has its own meta description.
- 7293da0: `lang="en-GB"` on the outer page of the proposal defence deck, which had none. The slides are not rebuilt.
- abe4f7a: `docs/copy/site-copy.md` follows.

## Checks

- `bash scripts/check-prose.sh` and `npm run build` pass, 22 pages.
- Built site: one meta description per page, no image without alt text, `lang` on every page, no internal link without a target. The home and 404 pages share the default description, left as is because the 404 page is noindex.
- Branch preview https://site-review-oktober.tomasvangorp.pages.dev: 22 sitemap pages and 26 internal URLs return 200, an unknown path returns 404.
- The slides link `/after-the-commitment-proposal-defence` has no trailing slash, which is right: with a slash Cloudflare answers 308 to the address without one. Without JavaScript the deck shows its placeholder bars and "This page requires JavaScript to display.", not "Unpacking...". With JavaScript it loads after the lang change.
- `~/Documents/personal-site-screenshots/2026-10-14-site-review/`: home, about, research, the proposal page, work and contact at 1440 and 390 in both themes, and the deck with JavaScript.

## Open

- Tomás reviews the preview and decides on the merge.
- The module 5 title and the Climate and Health Medicine title are copied as printed, with an Oxford comma and "Program". Tomás decides whether to keep them.
