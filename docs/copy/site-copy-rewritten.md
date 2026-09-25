# Site copy, rewritten

Rewrite of docs/copy/site-copy.md from 25 September 2026. Items tagged [phd] went through humanise-academic, everything else through humanise-general.

How to apply:
- Each item gives the new text and its source file. Replace the old text with the new text exactly.
- Items marked "unchanged" stay as they are.
- For entry bodies, replace the whole body. A blank line between paragraphs means a new paragraph.
- Tags, dates, date ranges, venues and organisation names in the strips stay as they are unless an item below says otherwise.
- The about page was already replaced in the previous session and is not part of this file.

## On every page

### Top bar
- "Tomás van Gorp", "Menu", "Projects", "Work", "Research", "About", "Contact": unchanged. Source: `src/components/Layout.astro`
- Theme button labels: unchanged. Source: `src/components/ThemeToggle.astro`
- Screen reader name of the menu: "Main menu" (was "Primary"). Source: `src/components/Layout.astro`

### Footer
- "Last updated 2026." and "Contact": unchanged. Source: `src/components/Layout.astro`

### Meta description and social preview
- Default meta and social description: "Tomás van Gorp researches what happens after a plan is signed, and helps organisations make it work." Source: `src/components/Layout.astro`
- og:site_name: unchanged.
- og:image:alt: "Tomás van Gorp. I research what happens after a plan is signed, and help organisations make it work." Source: `src/components/Layout.astro`
- Text in the social preview image: the name unchanged, the sentence becomes the new hero sentence below, with "after a plan is signed" in bold. Source: `scripts/og-image/og.html`. Re-render public/og.png.

## Home, /

- Page title: unchanged.
- Hero sentence: "I research what happens after a plan is signed, and help organisations make it work." Put "after a plan is signed" in bold instead of the three bold words now. Source: `src/pages/index.astro`
- "Three streams of work": unchanged.
- [phd] Research sheet line: "My PhD on how governments turn planetary health plans into practice." Source: `src/components/HomeSheets.astro`
- Work sheet line: "Consulting, board support and programme design." Source: `src/components/HomeSheets.astro`
- Projects sheet line: "Tools and experiments of my own." Source: `src/components/HomeSheets.astro`
- Sheet titles: unchanged.

## Projects index, /projects/

- Title: unchanged.
- Intro: "Tools and experiments I build in my own time, out of curiosity." Source: `src/pages/projects/index.astro`

## Work index, /work/

- Title: unchanged.
- Intro: "Selected roles and assignments, from a zoo's planetary health programme to board work in mental health care." Source: `src/pages/work/index.astro`
- "Other work": unchanged.
- Caption of the fold out group: "Earlier roles, for the record." Source: `src/pages/work/index.astro`

## Research index, /research/

- [phd] Title: unchanged.
- [phd] Intro: "My PhD and the pieces it is built from: the proposal, a literature review, a conceptual paper and the tool I code the cases in." Source: `src/pages/research/index.astro`
- [phd] Deck panel title: unchanged.
- [phd] Deck panel link label: "Open the defence slides". This comes from the research proposal entry, see below. Source: `src/components/DeckPanel.astro`

## Detail pages

- Back links, stream names and footer labels: unchanged. Source: `src/components/EntryLayout.astro`

## Contact, /contact/

- Title and buttons: unchanged.
- Text: "Write to me at hello@tomasvangorp.com." The address stays a link. Source: `src/pages/contact.astro`

## 404

- "Page not found": unchanged.
- Link: "Go to the home page" (was "Home"). Source: `src/pages/404.astro`

## Projects entries

### loelens

Source: `src/content/projects/loelens.md`

- Title: "loelens: scenario modelling for property prices in Dutch cities"
- Summary: "A free tool that shows where home prices in five Dutch cities could go under four scenarios. Built on public data and open about its limits."
- Status, tags, link label: unchanged.
- Body:

Debate about the property market runs on confident claims. Rates will rise, supply will fail, this neighbourhood will hold. Almost none of it is said in a form anyone can check later.

loelens projects home values by postcode under four scenarios, for five Dutch cities. The Amsterdam model is tuned on Amsterdam's own data. Rotterdam, Utrecht, The Hague and Eindhoven use their own neighbourhood figures, but the rules that turn those figures into a price path still come from Amsterdam. The tool says so on screen instead of hiding it behind a smooth number.

The projections run on public data: national statistics on housing stock, valuations and sales, plus central bank interest rates. A few commercial and industry figures appear on screen for context but never enter the calculations. A separate process refreshes the sources on a fixed schedule.

The scenario tool is free to use. Reports and a professional tier are built and will open once payments are set up. Amsterdam came first because its data is the best, and the method is meant to travel.

## Work entries

### ARTIS Natura Artis Magistra

Source: `src/content/work/artis.md`

- Title, organisation, tags: unchanged.
- Summary: "Built ARTIS' planetary health programme from one producer's brief into a permanent theme that reached tens of thousands of visitors."
- Body:

ARTIS is the oldest zoo in the Netherlands, and much more than a zoo. It works as a cultural institution that asks visitors to think about the living world, with research, art and public programmes alongside the animals.

The planetary health work started in 2022 with the First European Planetary Health Congress, for researchers and decision-makers. It grew into Aardbewoners, a public programme that kept the expert track running alongside. Over those years the audience widened to scientists, policymakers, students, families and weekend visitors, all in the same building.

I designed the programme, ran a multi-day symposium and set the editorial line across the year. The 2024 edition reached over 30,000 visitors across nine days. Aardbewoners stayed at ARTIS after my role ended.

### Bureau Design Digitale Zaken

Source: `src/content/work/bureau-ddz.md`

- Title, summary, organisation, tags: unchanged.
- Body:

Bureau DDZ was a full-service innovation agency in Amsterdam. It has since closed. I worked on research projects that mixed methods from art and science for public clients, including the Ministry of Infrastructure and Water Management and the municipalities of Amsterdam and Utrecht. Alongside the research I managed projects and coordinated partners across government, business and culture.

### Earlier research roles

Source: `src/content/work/earlier-research-roles.md`

- Title, organisation, tags: unchanged.
- Summary: "User research at Rabobank for a financial planning product, and research at Paradiso into why concert attendance stalled."
- Body:

Two short research roles. At Rabobank I did user research that fed into the design of a set of financial planning products.

Then came Paradiso, the Amsterdam concert venue. There I analysed holders of the Indiestadpas card to find out why their attendance stalled, and proposed a strategy to raise the average from four to ten events a year.

### Expertisecentrum Transculturele Therapie

Source: `src/content/work/ett.md`

- Title, organisation, tags: unchanged.
- Summary: "Supporting the executive board of a specialist mental health centre that works across cultures, on strategy and operations."
- Body:

ETT is a Dutch mental health centre for people whose distress is bound up with migration, language and cultural rupture. The board needed someone to hold the line between clinical reality, what insurers demand and what regulators expect.

I work next to the executive board. I draft the annual plans, strategic reports and policy documents that go to insurers, auditors and internal teams, and I make sure they all draw on the same source. The contract cycles with health insurers, and the reporting that follows, run through me. With the quality manager I turn operational data into decisions the board can act on.

Half the job is drafting. The other half is moving information between clinicians, managers and outside partners who each see the same case differently.

### Foundation We Are

Source: `src/content/work/foundation-we-are.md`

- Title, organisation, tags: unchanged.
- Summary: "Project management for a creative collective running several social impact briefs at once."
- Body:

A short engagement at a small Eindhoven design studio working on briefs with a social edge. I set up workflows so several projects could run at once without quality slipping, and wrote a short plan for finding new clients that mapped the sectors where design could plausibly add value.

### InScience Festival

Source: `src/content/work/inscience.md`

- Title, summary, organisation, tags: unchanged.
- Body:

InScience pairs new science films with live debate. As Head of Talks Programme I ran the cycle from first idea to stage. Partnerships with research institutes and media organisations gave the programme its weight.

The work was as much editorial as logistical. I chose which research the talks would put forward, found speakers who could open that work up to a non-specialist audience and shaped questions people could take home with them. The 2024 edition ran across several venues in Nijmegen, with a cross-functional team behind the production.

### Netherlands Ministry of Foreign Affairs

Source: `src/content/work/mvbz.md`

- Title, organisation, tags: unchanged.
- Summary: "Two placements in the Dutch foreign service, researching innovation, mobility and urban design at the consulate in Istanbul and the embassy in Tokyo."
- Body:

Two placements in the Dutch foreign service in 2018. Istanbul came first. There I mapped Turkey's green and smart mobility sector, identified the people and organisations that mattered and wrote the opportunity analysis for Dutch organisations looking to enter sustainable transport. I also wrote policy reports on Turkish science and technology and coordinated visiting delegations.

Tokyo followed in the autumn. I split my time between the embassy and Shibaura House, a public architecture and civic space in Minato. I researched the impact of design interventions in public space and compared how design thinking travels between Japanese and Dutch cities. The placement ended with a featured talk on inclusive design at FORUM DESIGN KYOTO.

### TOMICA

Source: `src/content/work/tomica.md`

- Title, organisation, tags: unchanged.
- Summary: "My own practice: applied research, programme design and strategy for organisations working where science, society and the environment meet."
- Body:

TOMICA is the name I work under when organisations bring me in from outside. I keep the remit narrow on purpose.

Most assignments ask me to read a complex body of evidence, design a programme or policy response that real teams can run and keep the political and ethical stakes in view along the way. Clients have included cultural institutions, public sector teams and research consortia.

The work is usually short and written, and meant to land somewhere specific: a board paper, a funding case, a programme design or a decision that was stuck. I keep the practice small so the material gets the attention it needs and the claims stay honest.

### What Design Can Do

Source: `src/content/work/what-design-can-do.md`

- Title, organisation, tags: unchanged.
- Summary: "Ran programmes for an international design platform working on social and climate briefs, including the Dutch track of the No Waste Challenge."
- Body:

What Design Can Do runs international challenges that ask designers to work on problems the market does not pay for, such as waste, energy and climate adaptation. I ran the Dutch track of the No Waste Challenge, a global call for circular design, from open submission through selection to follow-on support.

In parallel I led New Narrative Energy Transition with the Province of North Holland, working between creative professionals and a regional government that described the same problem in different words. I also worked on What Design Can Do LIVE.

The job taught me to hold a creative process and a public sector deadline together.

## Research entries

### After the commitment

Source: `src/content/research/after-the-commitment.md`. All items [phd].

- Title: unchanged. It is the thesis title.
- Venue, tags: unchanged.
- Summary: "Why some governments turn the planetary health frameworks they sign into rules and budgets, and others do not. A comparison of Wales, Brazil and China, traced step by step."
- Body:

Signing is the easy part. A government adopts a framework that asks its departments to work together on health and the environment, and then the real work begins: turning it into mandates, budgets, staff and accountability. Most of the interesting failure happens after the commitment, not before it.

The thesis asks under what conditions a signed framework produces substantive institutional change, meaning change in how government actually works, rather than fragmented adoption or stalled implementation. Fragmented adoption is the pattern where each sector does its own part and the links between sectors never change.

I test brokerage as the mechanism. Brokers are the people who carry a framework across the boundaries between sectors once the political moment has passed. The thesis asks what they can and cannot move.

Three cases carry the comparison. In Wales, the Well-being of Future Generations Act 2015 puts the commitment into law, and a decade of implementation now gives something to read. In Brazil, the federal government has pursued joined-up climate and health policy since 2016 and again since 2024, resting on international agreements and domestic scientific authority rather than on a law. In China, ecological civilisation, the national policy agenda for the environment, has been translated into local accounting practice in Lishui, in Zhejiang Province.

Each case is traced as a sequence of brokerage episodes and coded on five dimensions: formal rules and mandates, resource allocation, monitoring and enforcement, accountability mechanisms and cross-sectoral integration. Each dimension comes out as substantive conversion, fragmented adoption or stalled implementation. The five exist to separate a framework that changed how a state works from one that changed how a state talks.

This is the only research project I run. The other entries on this page are its parts: the proposal, the literature review, a conceptual paper and the tracker I code the cases in. More will follow as I write them.

Wales is coded. Brazil is scoped and in progress. China comes next. São Tomé and Príncipe is held in reserve as a fourth case.

### The Conversion Tracker

Source: `src/content/research/conversion-tracker.md`. All items [phd].

- Title, tags: unchanged.
- Summary: "One structured record per case: five dimensions, the evidence behind each, an outcome category and a confidence rating. Deliberately no overall score."
- Body:

Comparative work goes wrong quietly. Cases get assessed at different moments against slightly different standards, and by the end nobody can say what the difference between two scores rests on.

The tracker holds one record per case: the five dimensions, the evidence behind each with a pointer to where it was found, an outcome category and a confidence rating that stays visible. There is no overall score anywhere, on purpose. A single number would hide exactly the variation the comparison exists to find.

Wales is coded and Brazil is scoped. The tracker is not public yet. I will open it once there are enough cases in it to be worth reading.

### Fragmented adoption: naming the pattern

Source: `src/content/research/fragmented-adoption.md`. All items [phd].

- Title, summary, tags: unchanged.
- Body:

Existing accounts of why adoption fails measure depth: how far a commitment reaches inside an institution. Decoupling, where an organisation adopts a policy on paper without changing its practice, is the classic case. Means-ends decoupling, where practice changes but never reaches the goal, is a close relative. That lens works when the commitment belongs to one sector.

Integrative frameworks do not belong to one sector. They ask sectors to change how they relate to each other, and depth cannot show whether that happened. The paper adds a second axis, scope, and names what appears in the gap: fragmented adoption. Every sector does the work asked of it, funds it and reports on it, while the relationships between sectors stay exactly as they were.

A system in that state passes every test applied within a single sector. The paper works the pattern through the case of Wales and its Act of 2015.

I wrote it for an elective on urban and regional systems and sustainability. It is drafted, with an eye on submission, and I will link it here if it is published.

### Literature review: three traditions, one demand

Source: `src/content/research/literature-review.md`. All items [phd].

- Title, tags: unchanged.
- Summary: "A chapter on three governance traditions that grew up apart and arrived at the same demand: that governance should work across sectors rather than inside them."
- Body:

Planetary health, ecological civilisation and the sustainable development tradition behind the Welsh legislation each grew up separately, out of different politics. Read together, they make the same demand: that governance work across the boundaries between sectors rather than inside them.

The chapter traces how each tradition got there, and where each runs into the same wall. Frameworks are adopted formally and then fail to produce the cross-sectoral change they ask for. That is the gap the thesis works in.

Drafted, not yet published. I will link it here if it becomes public.

### The research proposal

Source: `src/content/research/research-proposal.md`. All items [phd].

- Title, tags: unchanged.
- Summary: "The design the thesis runs on: the question, the three cases, the five dimensions and the method, defended before the scientific committee at the University of Lisbon."
- Link label: "Open the defence slides"
- Body:

A proposal is where a thesis commits itself. It fixes the question, picks the cases and says in advance what would count as an answer and what would count as being wrong.

This one sets out brokerage as the mechanism and five dimensions along which a signed framework either becomes institutional practice or does not, and it compares Wales, Brazil and China. It also names the traps. Comparative work drifts when cases are coded against standards that move, so the standard is written down before the coding starts.

I defended it before the scientific committee at the University of Lisbon. It was not a thesis defence but a defence of the design.
