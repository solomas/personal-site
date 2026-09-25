# 2026-09-25l: Research overview, São Tomé sentence removed

Branch: `redesign`. Nothing went to `main`.

## What changed

- d3e8eb2 In `src/content/research/after-the-commitment.md` the closing line now reads "Work on Wales and Brazil is under way, and China comes next." The São Tomé and Príncipe sentence is gone. Nothing else changed. The deck is untouched.
- `docs/copy/site-copy.md` regenerated to match.

## São Tomé mentions

Searched `src/` and `scripts/` for São Tomé, Sao Tome and Príncipe: no other place.

## Checks

- `bash scripts/check-prose.sh` clean. `npm run build` passes.
