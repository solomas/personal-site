# Handover

## What the site is right now

### Session: Cloudflare Pages migration (commits a753e98, f95716f)

Site migrated from Netlify to Cloudflare Pages. Netlify free tier build minutes (300 per month) were exhausted mid-session, causing deploys to stop. Cloudflare Pages configured via dashboard: GitHub repo connected, Astro framework preset, build command "bash scripts/check-prose.sh && npm run build", output directory dist, Node 22 via .nvmrc. Security headers ported from netlify.toml to public/_headers in Cloudflare Pages format, commit a753e98. netlify.toml removed from repo, commit f95716f. New live URL: https://tomasvangorp.pages.dev. Old URL https://tomasvangorp.netlify.app retired.

### Session close: content, templates, paragraph spacing and marquee (commits 2a01ebc to b58de58)

Full arc of the session. PhD research entry "After the commitment..." replaced the placeholder at `src/content/research/phd-planetary-health.md`, commit 2a01ebc. Amsterdam property model entry added at `src/content/projects/amsterdam-property-model.md`, commit fafad9a. Projects placeholder `tomas-person.md` removed, commit bd244d1. Yellow rule and inline link styles added to projects and research detail templates, commit 205b185. Paragraph spacing on those templates pushed to 2.5em then dialled back to 1.5em, commits 00b4f80 and 1885c16. The earlier `.entry__body p` selector was failing due to Astro cid scoping: markdown-rendered elements do not carry the cid attribute so the rule never matched. Fixed to `.entry__body :global(p)`. Home marquee expanded from 6 to 9 items, commit b58de58. New items: Scenario modelling, Governance, Cultural institutions, Cross-cultural, Open data, Science and society. Removed: Field notes, Open work, Lisbon. Prose check caught a banned phrase in the Amsterdam entry draft and fixed it before commit. Detail templates for projects and research still lack the metadata line (date range and organisation) that the work template has. Deliberately deferred.

### Session, content and templates (commits 2a01ebc, fafad9a, bd244d1, 205b185)

Replaced both remaining placeholder entries with real content. PhD research entry at `src/content/research/phd-planetary-health.md` rewritten from source documents: full 5-paragraph body, updated title, summary, venue, tags. Projects placeholder `src/content/projects/tomas-person.md` deleted. New projects entry `src/content/projects/amsterdam-property-model.md` created from an existing separate repo. Prose check found a banned phrase in the draft copy, fixed to "flagged explicitly". Both detail page templates (projects and research) updated to match the work template: yellow rule above title, inline link styles in body. Compiled HTML confirmed correct on all three streams after build. Netlify deployment for 205b185 may need cache clear if styles not yet visible on live site.

### Session, work page from LinkedIn history

Brought the Work section to real content. Nine entries written from LinkedIn data, schema extended with endDate and current, formatDateRange helper added at src/utils/formatDateRange.ts. Index page now renders live entries in a primary section and three archived entries inside a collapsible Other work folder. Hover animation on live cards, scale plus title shift, summary opacity bump. Other work folder reads yellow on hover and expands on click. Detail page gained a yellow rule above the title, a yellow metadata line with date range and organisation, and yellow inline links inside body content. Cursor tightened, lerp from 0.35 to 0.25, native pointer hidden site wide on fine pointer devices, resting opacity 0.6 with hover at 1. Homepage strapline updated to "I work, advise and research at the intersection of science, society and environment." CLAUDE.md gained four permanent rules: session start read first, doc preservation, prose check no bypass, conflict resolution between session prompts and CLAUDE.md.

A personal site for Tomás van Gorp. It has a homepage, three stream index pages (projects, work, research), and one placeholder entry per stream. The visual design is complete: yellow default theme, black flip theme via a toggle, display-scale typography, a custom cursor with ring lag, section labels, a marquee strip, and hover-reveal entry counts on the homepage stream cards. The site builds cleanly and deploys to Netlify on every push to main.

- Work section, real content done, nine entries live
- PARKED.md exists as the canonical parked backlog
- CLAUDE.md carries four permanent rules at the top

## Live URL

https://tomasvangorp.pages.dev (Cloudflare Pages, live since commit a753e98).

The repo is at `github.com/solomas/personal-site`. The original Netlify placeholder below is retained for history: "Connect and confirm with Netlify once the domain is set."

## Stack

- **Astro 6.3.1** with TypeScript strict mode, content collections, glob loader.
- **Cloudflare Pages** for build and deploy. Security headers in `public/_headers`. Node 22 via `.nvmrc`. Build command: `bash scripts/check-prose.sh && npm run build`. Migrated from Netlify at commit f95716f.
- **GitHub** at `git@github.com:solomas/personal-site.git`. Branch: `main`.
- **Content** as Markdown in `src/content/`. Schema in `src/content.config.ts`. Three collections: projects, work, research.

## Design

- **Default theme:** yellow (`#ffd60a` background, black text).
- **Flip theme:** black (`#000000` background, white text). Toggled by the pill button in the header, persisted to `localStorage`.
- **First-visit hint:** a pulse ring around the toggle on the first load, clears after 8 seconds or on first click.
- **Custom cursor:** filled dot with a lagged ring on desktop. Hidden on touch and coarse-pointer devices.
- **Fonts:** Geist (display), Inter (body), Geist Mono (meta/labels). Loaded from Google Fonts.
- **Tokens:** all values in `src/styles/tokens.css`. Do not duplicate in component styles.

## Content streams

All placeholder entries have been replaced with real content. Current entries:

| Stream | File | Purpose |
|---|---|---|
| projects | `src/content/projects/amsterdam-property-model.md` | Amsterdam housing scenario model |
| work | `src/content/work/tomica.md` (+ 8 more) | Consulting, professional roles |
| research | `src/content/research/phd-planetary-health.md` | PhD at Universidade de Lisboa |

## What is parked, in priority order

Parked items now live in PARKED.md.

## How to add a new entry

Create a Markdown file in the right stream folder:

```
src/content/projects/my-new-project.md
src/content/work/my-new-engagement.md
src/content/research/my-new-paper.md
```

The frontmatter must match the schema in `src/content.config.ts`. Required fields: `title`, `summary` (max 200 chars), `date`, `status` (live/parked/archived). Work entries accept `organisation` and `role`. Research entries accept `venue`, `coauthors`, and `citation`.

Commit and push. Netlify picks up the push and rebuilds.

## How to run locally

```sh
cd ~/code/personal-site && npm run dev
```

Site serves at `localhost:4321`.

## How to reinstall the pre-commit hook on a fresh clone

```sh
bash scripts/install-hooks.sh
```

The pre-commit hook runs `scripts/check-prose.sh` on staged content files. It blocks commits that contain banned words, en dashes, or em dashes. The hook is local and not version controlled.

## Workflow

This site uses the Claude Chat and Claude Code pattern. Claude Chat writes prompts, Claude Code executes them in the terminal, paste-backs go to Claude Chat. CLAUDE.md at the repo root is the source of truth for writing rules, banned words, file structure, and build commands. Read it at the start of any session.
