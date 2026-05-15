# 2026-05-15: state doc restructure

Migrated the repo from HANDOVER.md + PARKED.md to the STATE.md + docs/state/ bucket pattern, mirroring the structure used in amsterdam-property-model.

## What changed

- Created STATE.md at repo root as the workstream index.
- Created docs/state/ with four bucket files: content.md, polish.md, css.md, optional-features.md. Open items from PARKED.md redistributed across the four buckets.
- Created docs/sessions/ with three archived session files derived from the prior HANDOVER.md entries (2026-05-14a, 2026-05-14c, 2026-05-14d). Session b dropped as it was superseded by c.
- Deleted HANDOVER.md and PARKED.md.
- Updated CLAUDE.md: replaced the HANDOVER.md and PARKED.md preservation rule with a new "Updating state docs" section, inserted a "Session close protocol" section before the writing rules, and updated the session start rule on line 5 plus the recon instruction on lines 11 to 13 to point at STATE.md and the bucket files instead of HANDOVER.md.

All changes shipped in a single commit, 622d7df, "Restructure session docs: state buckets, session archive, close protocol".

## Learnings

The prose check pre-commit hook bans semicolons. This caught three lines (STATE.md, content.md, css.md) that the chat-side drafts had not flagged. The opener template for future sessions now mentions this explicitly.

## What is open

No new content or feature work. All open items from the prior PARKED.md are now distributed across the four bucket files. See docs/state/ for current state.

## What is parked

Nothing new parked this session. Cleanup of stale references in CLAUDE.md was completed inline rather than parked.
