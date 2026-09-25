# Site copy, update 2

Update after the recon of 25 September 2026. Items tagged [phd] went through humanise-academic and follow the PhD writing rules in docs/workflow.md, including future tense for cases not yet researched. Everything else went through humanise-general.

How to apply:
- Each item gives the new text and its source file. Replace the old text with the new text exactly.
- Items marked "unchanged" stay as they are.
- For entry bodies, replace the whole body. A blank line between paragraphs means a new paragraph.
- Tags, dates, venues and statuses stay as they are.

## About, /about/

Source: `src/pages/about.astro`

- [phd] In the third paragraph, replace "I compare Wales, Brazil and Zhejiang Province in China." with "I compare cases in Wales, Brazil and China."
- Everything else on the page: unchanged.

## Research entries

### After the commitment

Source: `src/content/research/after-the-commitment.md`. All items [phd].

- Title, venue, tags: unchanged.
- Summary: "Why some governments turn the planetary health frameworks they sign into rules and budgets, and others do not. Built on cases in Wales, Brazil and China."
- Body:

Signing is the easy part. A government adopts a framework that asks its departments to work together on health and the environment, and then the real work begins: turning it into mandates, budgets, staff and accountability. Most of the interesting failure happens after the commitment, not before it.

The research question reads: "under what conditions does strategic brokerage produce substantive institutional conversion of integrative planetary health frameworks, rather than implementation stalling or fragmented adoption?"

In plain words, the question is when the people who connect different parts of government manage to turn a framework into lasting change. An integrative framework asks several sectors, such as health and environment, to act together. Substantive institutional conversion means the framework changes how government actually works, not only what it says. Fragmented adoption is the pattern where each sector does its own part and the links between sectors never change.

The mechanism I study is second-stage brokerage: what an identifiable person or organisation does to link sectors after a framework has been adopted, once the political moment has passed.

Three cases will carry the comparison. In Wales, the Well-being of Future Generations Act 2015 put the commitment into law, and a decade of implementation now gives something to trace. In Brazil, the 2016 national adaptation plan and the AdaptaSUS plan for the health system, which runs from 2024 to 2035, bring climate and health together. Both were set by ministerial order under the national climate law of 2009. The third case is in China, and the choice of case is still open.

Each case will be traced as a sequence of brokerage episodes, moments where an identifiable broker tries to move a framework into an institution with the authority to act on it. Each episode is coded on five dimensions: formal rules and mandates, resource allocation, monitoring and enforcement, accountability mechanisms and cross-sectoral integration.

The first four dimensions are scored as substantive change, procedural adoption or symbolic adoption. Roughly, that means real change, a change in procedure only or a change on paper only. The fifth, cross-sectoral integration, shows whether the sectors actually work together, and it is the one that tells fragmented adoption apart from real conversion. Fragmented adoption is a finding about a whole case, never a score on one dimension.

This is the only research project I run. The other entries on this page are its parts: the proposal, the literature review, a conceptual paper and the tracker I code the cases in. More will follow as I write them.

Work on Wales and Brazil is under way. The case in China depends on a decision in July 2027, and São Tomé and Príncipe is held in reserve as an alternative.

### The Conversion Tracker

Source: `src/content/research/conversion-tracker.md`. All items [phd].

- Title, summary, tags: unchanged.
- Body:

Comparative work goes wrong quietly. Cases get assessed at different moments against slightly different standards, and by the end nobody can say what the difference between two scores rests on.

The tracker holds one record per case: the five dimensions, the evidence behind each with a pointer to where it was found, an outcome category and a confidence rating that stays visible. There is no overall score anywhere, on purpose. A single number would hide exactly the variation the comparison exists to find.

Records for Wales and Brazil are under way. The tracker stays private until the cases can be checked against each other.

### Fragmented adoption: naming the pattern

Source: `src/content/research/fragmented-adoption.md`. All items [phd].

- Title, summary, tags: unchanged.
- Body:

Existing accounts of why adoption fails measure depth: how far a commitment reaches inside an institution. Decoupling, where an organisation adopts a policy on paper without changing its practice, is the classic case. Means-ends decoupling, where practice changes but never reaches the goal, is a close relative. That lens works when the commitment belongs to one sector.

Integrative frameworks do not belong to one sector. They ask sectors to change how they relate to each other, and depth cannot show whether that happened. The paper adds a second axis, scope, and names what appears in the gap: fragmented adoption. Every sector does the work asked of it, funds it and reports on it, while the relationships between sectors stay exactly as they were.

A system in that state passes every test applied within a single sector. The paper works the pattern through the case of Wales and its Act of 2015.

I first wrote it as coursework in August 2026. A journal version is planned, and I will link it here once it is published.

### Literature review: three traditions, one demand

Source: `src/content/research/literature-review.md`. All items [phd].

- Title, tags: unchanged.
- Summary: "A chapter on three governance traditions that developed in different settings and arrive at the same demand: that governance should work across sectors rather than inside them."
- Body:

Planetary health, China's ecological civilisation and the Wellbeing of Future Generations tradition behind the Welsh legislation developed in different institutional settings. They are not fully independent. The Welsh tradition and ecological civilisation both grow out of the same sustainable development tradition. Read together, all three make the same demand: that governance work across the boundaries between sectors rather than inside them.

The chapter traces how each tradition got there, and where each runs into the same wall. Frameworks are adopted formally and then fail to produce the cross-sectoral change they ask for. That is the gap the thesis works in.

The chapter is still in progress. I am adding a scoping review, which maps the published research in a structured way. I will link the chapter here once it is public.

### The research proposal

Source: `src/content/research/research-proposal.md`. All items [phd].

- Unchanged.

## Projects entries

### loelens

Source: `src/content/projects/loelens.md`

- Title, status, tags, link label: unchanged.
- Summary: "A tool that shows where home prices in Dutch cities could go over the next ten years, under four scenarios. Live, and still changing."
- Body:

Debate about the property market runs on confident claims. Rates will rise, supply will fail, this neighbourhood will hold. Almost none of it is said in a form anyone can check later.

loelens projects home values by postcode area, ten years ahead, under four scenarios. Amsterdam is calibrated on its own data. Rotterdam, Utrecht, The Hague and Eindhoven are live as provisional cities. They use their own neighbourhood figures, but part of the rules that turn those figures into a price path still comes from Amsterdam. The tool says so on screen instead of hiding it behind a smooth number.

Most of the data is public. The main sources are the Dutch statistics office CBS, the European Central Bank, De Nederlandsche Bank and the City of Amsterdam's own statistics. A few market figures from commercial sources sit alongside. Scheduled jobs refresh the data every week, month and quarter.

Anyone can explore the baseline scenario for free, one neighbourhood at a time. The four scenarios, reports and a professional tier are priced and will open once payments are set up. Amsterdam came first because its data is the best, and the method is meant to travel. It is a work in progress, live and still changing.
