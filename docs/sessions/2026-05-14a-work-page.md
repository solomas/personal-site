# 2026-05-14a: work page from LinkedIn history

Brought the Work section to real content. Nine entries written from LinkedIn data, schema extended with endDate and current, formatDateRange helper added at src/utils/formatDateRange.ts. Index page now renders live entries in a primary section and three archived entries inside a collapsible Other work folder. Hover animation on live cards, scale plus title shift, summary opacity bump. Other work folder reads yellow on hover and expands on click. Detail page gained a yellow rule above the title, a yellow metadata line with date range and organisation, and yellow inline links inside body content. Cursor tightened, lerp from 0.35 to 0.25, native pointer hidden site wide on fine pointer devices, resting opacity 0.6 with hover at 1. Homepage strapline updated to "I work, advise and research at the intersection of science, society and environment." CLAUDE.md gained four permanent rules: session start read first, doc preservation, prose check no bypass, conflict resolution between session prompts and CLAUDE.md.

A personal site for Tomás van Gorp. It has a homepage, three stream index pages (projects, work, research), and one placeholder entry per stream. The visual design is complete: yellow default theme, black flip theme via a toggle, display-scale typography, a custom cursor with ring lag, section labels, a marquee strip, and hover-reveal entry counts on the homepage stream cards. The site builds cleanly and deploys to Netlify on every push to main.

- Work section, real content done, nine entries live
- PARKED.md exists as the canonical parked backlog
- CLAUDE.md carries four permanent rules at the top
