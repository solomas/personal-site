# 2026-11-14f: Dutch scan page live

Tomás approved the merge of `scan-nl` for now and will read the Dutch text closely another time. Claude merged it into `main` with `git merge --no-ff` at d272411 and pushed from a clone in its own workspace, under the standing permission in CLAUDE.md. `git revert -m 1 d272411` undoes it in one step. The branch `scan-nl` is kept.

## Open

- Tomás reviews the Dutch scan text, including "je" over "u".
- A check on a real iPhone.
- The Mac sits at 2b67f2a and needs a fetch over HTTPS to reach `main`.
