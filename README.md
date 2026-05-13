# Personal site

A personal website built with Astro. Content is organised into three streams.

**Personal** covers side projects, experiments, and anything that does not fit a professional or academic context.

**Professional** covers consulting work, employment, and public deliverables.

**Academic** covers papers, talks, and datasets.

## Running locally

Install dependencies once:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Prose check

A script checks committed content files for banned words and punctuation before each commit. The pre-commit hook is local and not version controlled. On a fresh clone, reinstall it:

```sh
bash scripts/install-hooks.sh
```

Run the check manually at any time:

```sh
bash scripts/check-prose.sh
```
