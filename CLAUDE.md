# Project conventions for personal-site

## Session start, read before any edit

At the start of every session, before producing any output, edits or commits, read the full contents of CLAUDE.md and STATE.md. This rule is absolute. No exceptions. If either file is missing, stop and report rather than proceeding without context.

This rule exists because writing rules and banned words live in CLAUDE.md, and current workstream state lives in STATE.md and `docs/state/`. Editing without reading them first risks breaking conventions or acting on stale context.

Apply this pattern:

- The first action of any session is to read CLAUDE.md in full and read STATE.md plus the relevant bucket file(s) in `docs/state/`.
- If the session prompt names a specific area of work, confirm there are no conflicting open items or banned words in those files before drafting any code or copy.
- If a conflict appears between the session prompt and CLAUDE.md, stop and report. Do not silently choose one over the other.

## Updating state docs
- State docs in `docs/state/` record current truth. Update them at the start of any session that opens or closes work in that workstream, and again at session close.
- Preservation rule: when editing a state doc, add or update; do not silently delete open items unless they are genuinely closed. If closing an item, record what closed it (commit hash, session date) in the session doc.
- STATE.md changes only when the workstream structure itself changes (new bucket, renamed bucket, deleted bucket).
- Session docs in `docs/sessions/` are append-only history. Do not edit prior session docs.

## Prose check, no bypass

Every commit that touches .md, .mdx, .astro or .html files must pass bash scripts/check-prose.sh before commit. This rule is absolute.

Apply these patterns:

- Do not commit if the prose check fails. Report the failure and stop.
- Do not edit the banned words list, the writing rules or the check-prose.sh script itself inside a content session. If the session prompt asks for a change to the banned words list or the writing rules, treat it as a separate explicit task and confirm in writing before editing.
- Do not weaken, soften or paraphrase a banned word in a way that hides intent. If a banned word is genuinely needed in a quotation or proper noun, flag it in the report and ask the user before committing.
- If the prose check fires on copy that the user has already approved verbatim in the session, report the flag and stop. Do not silently rewrite approved copy.

This rule exists because the writing rules and banned words list are the spine of the site's voice. Silent drift erodes the voice across sessions.

## Conflict between session prompt and CLAUDE.md

If a session prompt contradicts a rule in CLAUDE.md, the CLAUDE.md rule wins by default. Stop, report the conflict, and ask the user to confirm before proceeding.

The user may override a CLAUDE.md rule for a single session, but the override must be explicit and the report must record it. Implicit override by quiet compliance is not allowed.

## Session close protocol
Run in order at the end of any session that did substantive work:
1. Write a session doc at `docs/sessions/YYYY-MM-DD<letter>-<slug>.md` covering what changed, what's open, what's parked.
2. Update the relevant bucket file(s) in `docs/state/`: move new open items in, mark closed items as done, update Status if reality changed.
3. Update STATE.md only if the workstream structure itself changed (new bucket, renamed bucket).
4. Commit and push as a distinct step: `git add`, `git commit`, `git push`.
5. Verify the push reached origin: `git log --oneline origin/main | head -5`.

Rules from past mistakes:
- Never create a second STATE.md or duplicate bucket files in other paths.
- HANDOVER.md and PARKED.md no longer exist in this repo. Do not recreate them. Open items go into bucket files; history goes into session docs.

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
- projects: side work, experiments, things made out of personal interest.
- work: professional roles, deliverables, consulting.
- research: PhD work, papers, talks, datasets.

## File structure
- `src/content/projects/` for project entries.
- `src/content/work/` for work entries.
- `src/content/research/` for research entries.
- `src/pages/` for routes.
- `src/components/` for shared components.
- `src/styles/` for shared styles.

## Design tokens
Dark anthracite base, warm mustard accent, Inter body, Geist display, Geist Mono meta. See `src/styles/tokens.css` for values. Do not duplicate values in component styles, reference the custom properties.

## Build commands
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Prose check: `bash scripts/check-prose.sh`

## Git hooks
The pre-commit hook at `.git/hooks/pre-commit` is local and not version controlled. On a fresh clone, reinstall it by running `bash scripts/install-hooks.sh`.
