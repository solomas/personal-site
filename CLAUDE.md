# Project conventions for personal-site

## Session start, read before any edit

At the start of every session, before producing any output, edits or commits, read the full contents of CLAUDE.md and HANDOVER.md. This rule is absolute. No exceptions. If either file is missing, stop and report rather than proceeding without context.

This rule exists because writing rules, banned words, parked items and current state all live in these two files. Editing without reading them first risks breaking conventions or overwriting context that earlier sessions established.

Apply this pattern:

- The first action of any session is to print or summarise the relevant sections of CLAUDE.md and HANDOVER.md.
- If the session prompt names a specific area of work, confirm there are no conflicting parked items, banned words or open decisions in either file before drafting any code or copy.
- If a conflict appears between the session prompt and CLAUDE.md or HANDOVER.md, stop and report. Do not silently choose one over the other.

## Updating HANDOVER.md, preservation rule

When updating HANDOVER.md at any point in any session, including session close, this rule is absolute and overrides any contradictory instruction in a session prompt.

Do not overwrite or delete anything that is already in HANDOVER.md unless the session prompt explicitly says to remove a specific named item. Every existing entry, section, line and parked item must remain after any edit.

Apply these patterns:

- Default action when updating HANDOVER.md is ADD, not REPLACE.
- "Update the current state section" means add lines to it, not rewrite it.
- "Rotate the recent sessions list" means push a new entry to the top and let older entries drop off naturally if a cap exists. Tell the user explicitly which entry, if any, was dropped.
- "Reorder by priority" means move existing items up or down within the file. Items not named in the priority list must remain in the file in their current relative order, below the named items. Never delete items because they were not in the priority list.
- If about to replace a section wholesale, stop. Edit only the specific lines named in the prompt.

Verification protocol when updating HANDOVER.md:

1. Print the current full contents of the doc before making any change.
2. Make the edits.
3. Print the full contents again after edits, plus a diff summary listing exactly which sections and lines were added.
4. Confirm no existing content was deleted.
5. Only commit after verification confirms nothing was lost. If anything was accidentally deleted, stop and report instead of committing.

This rule exists because parked items represent backlog gathered over many sessions, and silent loss of a parked item means losing a decision or a known issue that no one will remember to recreate.

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
