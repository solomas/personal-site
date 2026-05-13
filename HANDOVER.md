# Handover

## What the site is right now

A personal site for Tomás van Gorp. It has a homepage, three stream index pages (projects, work, research), and one placeholder entry per stream. The visual design is complete: yellow default theme, black flip theme via a toggle, display-scale typography, a custom cursor with ring lag, section labels, a marquee strip, and hover-reveal entry counts on the homepage stream cards. The site builds cleanly and deploys to Netlify on every push to main.

## Live URL

Connect and confirm with Netlify once the domain is set. The repo is at `github.com/solomas/personal-site`.

## Stack

- **Astro 6.3.1** with TypeScript strict mode, content collections, glob loader.
- **Netlify** for build and deploy. Config in `netlify.toml`. Node 22. Build command runs prose check before `npm run build`.
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

Each stream has one placeholder entry that should be replaced with real content.

| Stream | File | Purpose |
|---|---|---|
| projects | `src/content/projects/tomas-person.md` | Side work, experiments |
| work | `src/content/work/tomica.md` | Consulting, professional work |
| research | `src/content/research/phd-planetary-health.md` | PhD, papers, talks |

## What is parked, in priority order

1. **Real content.** Replace the three placeholder entries. Files and schema are already in place.
2. **Mobile and responsive polish.** The site has media queries for narrow viewports but has not been tested on phones.
3. **404 page.** No custom error page exists. The Netlify default shows instead.
4. **Favicon and Open Graph image.** The SVG favicon from the Astro scaffold is in place. No OG image exists for social sharing.
5. **Optional extras:** about page with bio and contact, tag filtering on stream index pages, site search.

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
