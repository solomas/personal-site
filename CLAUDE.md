# Project conventions for personal-site

## Writing rules, binding for all output
- British English. No Oxford comma. No en dashes, em dashes or hyphens except in correct spelling.
- Active voice: actor first, action follows. Vary sentence length deliberately.
- Plain words: "use" not "utilise", "show" not "demonstrate", "because" not "due to the fact that". Define jargon once, briefly, with a concrete example.
- No filler. Never open with "It is important to note" or use "moreover", "furthermore", "as such", "it is worth noting".
- No hollow qualifiers. Replace "this might suggest" or "it could be argued" with what the evidence actually supports.
- No semicolons to join sentences. Rewrite or split.
- Keep it concrete. Name the institution, mechanism, actor or constraint.
- Do not perform rigour. State the finding, show the reasoning, acknowledge what the evidence cannot yet support.

## Banned words and phrases
utilise, utilize, demonstrate, moreover, furthermore, as such, it is worth noting, it is important to note, leverage (as verb), delve, navigate (figurative), unlock (figurative), seamless, robust, comprehensive, in conclusion, in summary.

## Banned punctuation
- En dash (U+2013).
- Em dash (U+2014).
- Semicolons joining independent clauses.
- Oxford comma.

## Prose check
Before any commit that touches `.md`, `.mdx`, `.astro`, `.html` or content files, run `scripts/check-prose.sh` on staged files. A non-zero exit blocks the commit.

## Content streams
- personal: side work, experiments.
- professional: consulting, employment, public deliverables.
- academic: papers, talks, datasets.

## File structure
- `src/content/personal/` for personal entries.
- `src/content/professional/` for professional entries.
- `src/content/academic/` for academic entries.
- `src/pages/` for routes.
- `src/components/` for shared components.
- `src/styles/` for shared styles.

## Build commands
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Prose check: `bash scripts/check-prose.sh`

## Git hooks
The pre-commit hook at `.git/hooks/pre-commit` is local and not version controlled. On a fresh clone, reinstall it by running `bash scripts/install-hooks.sh`.
