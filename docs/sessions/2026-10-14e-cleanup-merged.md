# 2026-10-14e: grid cleanup merged

Tomás approved `cleanup-case-progress`. It went into `main` with `git merge --no-ff` at 2e8b4bf and was pushed. `git revert -m 1 2e8b4bf` undoes it in one step. The case names Wales, Brazil and China stay in `src/data/phd-progress.json`, as Tomás decided.

## Checks

- `bash scripts/check-prose.sh` and `npm run build` pass on `main` after the merge.
- https://tomasvangorp.com: home, projects and a certificate PDF return 200. The text of the overview, about, work, research and contact pages matches the build. On the contact page the only difference is Cloudflare's address protection, which replaces the address without JavaScript, as noted under the thesis header panel in `docs/state/content.md`.

## Open

Nothing from the October review. The branches `site-review-oktober` and `cleanup-case-progress` are merged and stay on the remote.
