# 2026-10-14b: October site review, session 2

Branch: `site-review-oktober`, continuing from 7617691. Nothing went to `main`. The report for Tomás, in Dutch, is the chapter "Sessie 2" in `REVIEW-oktober-2026.md`.

An earlier brief for this session asked for a globe and a case tracker on the home page. Tomás replaced it before any file changed, so none of that was built.

## What changed

- 07a575f: `src/pages/index.astro` is back to the version on `main`: the hero and the three sheets, no line under the hero.
- 3ec2224: the work page intro is now the line that sat under the home hero. The meta description keeps the earlier intro.
- 4bc225e: the four course certificates sit unchanged in `public/certificates/` (climate-and-health-medicine-2026.pdf, isglobal-2026-m2.pdf, m3 and m5). `src/data/training.ts` gives each course or module a certificate path. The about page shows "View certificate (PDF)" for a course with one certificate, and links each ISGlobal module title, ending in "(PDF)", to its own certificate. All open in a new tab. The congress stays commented out, with no PDF.
- 23a0dac: the contact line ends at "research collaborations".
- 39a7253: `docs/copy/site-copy.md` follows.

## Checks

- Personal data: the certificates carry the name and nothing else personal, in the visible text, the PDF text and the metadata. The QR codes on the ISGlobal certificates link to ISGlobal's verification page, which shows the name, course, module and award date.
- `bash scripts/check-prose.sh` and `npm run build` pass. 243 internal links in the build, the four PDF links among them, all resolve.
- `~/Documents/personal-site-screenshots/2026-10-14-site-review-2/`: home, work, about and contact at 1440 and 390 in both themes.

## Open

- The contact meta description still says "in Dutch or English". Left, because the brief changed only the sentence on the page.
- Tomás reviews the preview and decides on the merge.
