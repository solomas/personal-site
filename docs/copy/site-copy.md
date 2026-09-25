# Site copy

Every piece of visible text on the site as of 25 September 2026, branch `redesign`, after the copy rewrite from `docs/copy/site-copy-rewritten.md` and copy update 2 from `docs/copy/site-copy-update-2.md`. Nothing here changes the site. Each item names its source file.

Tags: [phd] marks text about the PhD or academic research. [general] marks everything else. Research roles outside the PhD, such as the Rabobank and Paradiso work, count as [general].

Text built from data rather than written as copy, such as dates, date ranges and the year in the footer, is noted where it appears. The proposal defence deck at `public/after-the-commitment-proposal-defence.html` is a standalone generated file with its own slide text, outside the site templates, and is not listed.

## On every page

### Top bar
- [general] "Tomás van Gorp" (name, links home). Source: `src/components/Layout.astro`
- [general] "Menu" (menu button). Source: `src/components/Layout.astro`
- [general] "Projects" (menu link). Source: `src/components/Layout.astro`
- [general] "Work" (menu link). Source: `src/components/Layout.astro`
- [general] "Research" (menu link). Source: `src/components/Layout.astro`
- [general] "About" (menu link). Source: `src/components/Layout.astro`
- [general] "Contact" (menu link). Source: `src/components/Layout.astro`
- [general] "Switch to dark theme" (theme button label for screen readers, day theme). Source: `src/components/ThemeToggle.astro`
- [general] "Switch to light theme" (theme button label for screen readers, night theme). Source: `src/components/ThemeToggle.astro`
- [general] "Switch theme" (theme button label before its script runs). Source: `src/components/ThemeToggle.astro`
- [general] "Main menu" (screen reader name of the menu). Source: `src/components/Layout.astro`

### Footer
- [general] "Last updated 2026." (the year is the build year). Source: `src/components/Layout.astro`
- [general] "Contact" (footer link). Source: `src/components/Layout.astro`

### Meta description and social preview
- [general] "Tomás van Gorp researches what happens after a plan is signed, and helps organisations make it work." (default meta and social description, used on the home, contact and 404 pages). Source: `src/components/Layout.astro`
- [general] "Tomás van Gorp" (og:site_name). Source: `src/components/Layout.astro`
- [general] "Tomás van Gorp. I research what happens after a plan is signed, and help organisations make it work." (og:image:alt). Source: `src/components/Layout.astro`
- [general] "Tomás van Gorp" (text in the social preview image public/og.png). Source: `scripts/og-image/og.html`
- [general] "I research what happens after a plan is signed, and help organisations make it work." (text in the social preview image, after a plan is signed in bold). Source: `scripts/og-image/og.html`

Page titles, meta descriptions and social titles per page are listed under each page below.

## Home, /

- [general] "Tomás van Gorp" (page title). Source: `src/pages/index.astro`
- [general] "I research what happens after a plan is signed, and help organisations make it work." (hero sentence, after a plan is signed in bold). Source: `src/pages/index.astro`
- [general] "Three streams of work" (screen reader name of the three sheets). Source: `src/components/HomeSheets.astro`
- [phd] "Research" (sheet title). Source: `src/components/HomeSheets.astro`
- [phd] "My PhD on how governments turn planetary health plans into practice." (sheet line). Source: `src/components/HomeSheets.astro`
- [general] "Work" (sheet title). Source: `src/components/HomeSheets.astro`
- [general] "Consulting, board support and programme design." (sheet line). Source: `src/components/HomeSheets.astro`
- [general] "Projects" (sheet title). Source: `src/components/HomeSheets.astro`
- [general] "Tools and experiments of my own." (sheet line). Source: `src/components/HomeSheets.astro`

## Projects index, /projects/

- [general] "Projects" (page title and heading). Source: `src/pages/projects/index.astro`
- [general] "Tools and experiments I build in my own time, out of curiosity." (intro, also the meta and social description). Source: `src/pages/projects/index.astro`

Each row shows an entry's date (month and year), title and summary, listed under Projects entries below.

## Work index, /work/

- [general] "Work" (page title and heading). Source: `src/pages/work/index.astro`
- [general] "Selected roles and assignments, from a zoo's planetary health programme to board work in mental health care." (intro, also the meta and social description). Source: `src/pages/work/index.astro`
- [general] "Other work" (label of the fold out group). Source: `src/pages/work/index.astro`
- [general] "Earlier roles, for the record." (caption of the fold out group). Source: `src/pages/work/index.astro`

Each row shows an entry's date range, title and summary. Date ranges read like "Jun 2025 to present" or "Dec 2022 to Sep 2024", built by `src/utils/formatDateRange.ts`.

## Research index, /research/

- [phd] "Research" (page title and heading). Source: `src/pages/research/index.astro`
- [phd] "My PhD and the pieces it is built from: the proposal, a literature review, a conceptual paper and the tool I code the cases in." (intro, also the meta and social description). Source: `src/pages/research/index.astro`
- [phd] "The research proposal" (deck panel title, taken from the research proposal entry). Source: `src/components/DeckPanel.astro`
- [phd] "Open the defence slides" (deck panel link label, taken from the research proposal entry, followed by an arrow). Source: `src/components/DeckPanel.astro`

## Detail pages, /projects/, /work/ and /research/ entries

- [general] "Back to projects" (back link, also Back to work and Back to research). Source: `src/components/EntryLayout.astro`
- [general] "projects" (stream name in the header strip, also work and research). Source: `src/components/EntryLayout.astro`
- [general] "Tags" (footer label). Source: `src/components/EntryLayout.astro`
- [general] "Co-authors" (footer label). Source: `src/components/EntryLayout.astro`
- [general] "Citation" (footer label). Source: `src/components/EntryLayout.astro`
- [general] "Links" (footer label). Source: `src/components/EntryLayout.astro`

The page title is the entry title and the meta and social description is the entry summary. The strip shows the stream, then for projects the status, for work the date range and organisation, and for research the date and venue.

## About, /about/

- [general] "About" (page title and heading). Source: `src/pages/about.astro`
- [general] "Tomás van Gorp on his research, his work with organisations and what he is open to." (meta and social description). Source: `src/pages/about.astro`
- [general] "I'm Tomás van Gorp. I'm interested in the months after a plan is signed, when someone has to make it work.". Source: `src/pages/about.astro`
- [general] "Behind that is a curiosity about how systems behave: how rules, money, people and places interact, and why a good plan so often changes shape on its way into practice. I have followed that question through Amsterdam's zoo, a science film festival, an embassy in Tokyo, a consulate in Istanbul, a concert hall and a mental health centre that works across cultures. Now I follow it through a PhD.". Source: `src/pages/about.astro`
- [general] "My doctoral research at the University of Lisbon looks at planetary health frameworks after governments adopt them, and at why so many stall before they change how anything works. I compare cases in Wales, Brazil and China. I'm also part of a European COST Action on nature-based solutions and health, and of Open Research Amsterdam's urban ecology workspace.". Source: `src/pages/about.astro`
- [general] "Alongside the research I work with organisations as an independent consultant. I support boards with governance, planning and reporting. I design and run programmes, from the First European Planetary Health Congress to a nine-day festival for over 30,000 visitors. And I do applied research and evaluation, often by bringing together people who rarely sit at the same table: scientists, policymakers, artists and the public. Right now I'm open to both consulting projects and research collaborations.". Source: `src/pages/about.astro`
- [general] "I studied arts and economics at HKU University of the Arts Utrecht, and later arts, culture and society at Erasmus University Rotterdam. I live in Portugal and work in Dutch and English, and my Portuguese is getting better.". Source: `src/pages/about.astro`
- [general] "Contact" (closing link). Source: `src/pages/about.astro`

## Contact, /contact/

- [general] "Contact" (page title and heading). Source: `src/pages/contact.astro`
- [general] "Write to me at hello@tomasvangorp.com." (the address is a link). Source: `src/pages/contact.astro`
- [general] "Email" (button). Source: `src/pages/contact.astro`
- [general] "LinkedIn" (button). Source: `src/pages/contact.astro`
- [general] "ORCID" (button). Source: `src/pages/contact.astro`

## 404, any unknown address

- [general] "Page not found" (page title and heading). Source: `src/pages/404.astro`
- [general] "Go to the home page" (link). Source: `src/pages/404.astro`

## Collection entries

Each entry lists what the site shows: title, summary, the strip fields, tags, link labels and the body. The role field on work entries is not shown anywhere on the site and is left out.

### Projects entries

#### loelens: scenario modelling for property prices in Dutch cities

Source: `src/content/projects/loelens.md`. All items [general].

- Title: "loelens: scenario modelling for property prices in Dutch cities"
- Summary: "A tool that shows where home prices in Dutch cities could go over the next ten years, under four scenarios. Live, and still changing."
- Status in the strip: "live"
- Tags: "housing, modelling, cities, public-data, loelens, netherlands, scenario-modelling"
- Link label: "loelens.com"
- Body:

  > Debate about the property market runs on confident claims. Rates will rise, supply will fail, this neighbourhood will hold. Almost none of it is said in a form anyone can check later.

  > loelens projects home values by postcode area, ten years ahead, under four scenarios. Amsterdam is calibrated on its own data. Rotterdam, Utrecht, The Hague and Eindhoven are live as provisional cities. They use their own neighbourhood figures, but part of the rules that turn those figures into a price path still comes from Amsterdam. The tool says so on screen instead of hiding it behind a smooth number.

  > Most of the data is public. The main sources are the Dutch statistics office CBS, the European Central Bank, De Nederlandsche Bank and the City of Amsterdam's own statistics. A few market figures from commercial sources sit alongside. Scheduled jobs refresh the data every week, month and quarter.

  > Anyone can explore the baseline scenario for free, one neighbourhood at a time. The four scenarios, reports and a professional tier are priced and will open once payments are set up. Amsterdam came first because its data is the best, and the method is meant to travel. It is a work in progress, live and still changing.

### Work entries

#### ARTIS Natura Artis Magistra

Source: `src/content/work/artis.md`. All items [general].

- Title: "ARTIS Natura Artis Magistra"
- Summary: "Built ARTIS' planetary health programme from one producer's brief into a permanent theme that reached tens of thousands of visitors."
- Organisation in the strip: "ARTIS Natura Artis Magistra"
- Tags: "planetary-health, public-engagement, cultural-institution"
- Body:

  > ARTIS is the oldest zoo in the Netherlands, and much more than a zoo. It works as a cultural institution that asks visitors to think about the living world, with research, art and public programmes alongside the animals.

  > The planetary health work started in 2022 with the First European Planetary Health Congress, for researchers and decision-makers. It grew into Aardbewoners, a public programme that kept the expert track running alongside. Over those years the audience widened to scientists, policymakers, students, families and weekend visitors, all in the same building.

  > I designed the programme, ran a multi-day symposium and set the editorial line across the year. The 2024 edition reached over 30,000 visitors across nine days. Aardbewoners stayed at ARTIS after my role ended.

#### Bureau Design Digitale Zaken

Source: `src/content/work/bureau-ddz.md`. All items [general].

- Title: "Bureau Design Digitale Zaken"
- Summary: "Design research and project management at a Dutch innovation agency working for ministries and city governments."
- Organisation in the strip: "Bureau Design Digitale Zaken"
- Tags: "design-research, public-sector"
- Body:

  > Bureau DDZ was a full-service innovation agency in Amsterdam. It has since closed. I worked on research projects that mixed methods from art and science for public clients, including the Ministry of Infrastructure and Water Management and the municipalities of Amsterdam and Utrecht. Alongside the research I managed projects and coordinated partners across government, business and culture.

#### Earlier research roles

Source: `src/content/work/earlier-research-roles.md`. All items [general].

- Title: "Earlier research roles"
- Summary: "User research at Rabobank for a financial planning product, and research at Paradiso into why concert attendance stalled."
- Organisation in the strip: "Rabobank Groep and Paradiso"
- Tags: "research"
- Body:

  > Two short research roles. At Rabobank I did user research that fed into the design of a set of financial planning products.

  > Then came Paradiso, the Amsterdam concert venue. There I analysed holders of the Indiestadpas card to find out why their attendance stalled, and proposed a strategy to raise the average from four to ten events a year.

#### Expertisecentrum Transculturele Therapie

Source: `src/content/work/ett.md`. All items [general].

- Title: "Expertisecentrum Transculturele Therapie"
- Summary: "Supporting the executive board of a specialist mental health centre that works across cultures, on strategy and operations."
- Organisation in the strip: "Expertisecentrum Transculturele Therapie"
- Tags: "healthcare, governance"
- Body:

  > ETT is a Dutch mental health centre for people whose distress is bound up with migration, language and cultural rupture. The board needed someone to hold the line between clinical reality, what insurers demand and what regulators expect.

  > I work next to the executive board. I draft the annual plans, strategic reports and policy documents that go to insurers, auditors and internal teams, and I make sure they all draw on the same source. The contract cycles with health insurers, and the reporting that follows, run through me. With the quality manager I turn operational data into decisions the board can act on.

  > Half the job is drafting. The other half is moving information between clinicians, managers and outside partners who each see the same case differently.

#### Foundation We Are

Source: `src/content/work/foundation-we-are.md`. All items [general].

- Title: "Foundation We Are"
- Summary: "Project management for a creative collective running several social impact briefs at once."
- Organisation in the strip: "Foundation We Are"
- Tags: "design, project-management"
- Body:

  > A short engagement at a small Eindhoven design studio working on briefs with a social edge. I set up workflows so several projects could run at once without quality slipping, and wrote a short plan for finding new clients that mapped the sectors where design could plausibly add value.

#### InScience Festival

Source: `src/content/work/inscience.md`. All items [general].

- Title: "InScience Festival"
- Summary: "Led the Talks Programme of the Netherlands' international science film festival, curating debates at the edge of research, film and public life."
- Organisation in the strip: "InScience International Science Film Festival"
- Tags: "public-engagement, science-communication"
- Body:

  > InScience pairs new science films with live debate. As Head of Talks Programme I ran the cycle from first idea to stage. Partnerships with research institutes and media organisations gave the programme its weight.

  > The work was as much editorial as logistical. I chose which research the talks would put forward, found speakers who could open that work up to a non-specialist audience and shaped questions people could take home with them. The 2024 edition ran across several venues in Nijmegen, with a cross-functional team behind the production.

#### Netherlands Ministry of Foreign Affairs

Source: `src/content/work/mvbz.md`. All items [general].

- Title: "Netherlands Ministry of Foreign Affairs"
- Summary: "Two placements in the Dutch foreign service, researching innovation, mobility and urban design at the consulate in Istanbul and the embassy in Tokyo."
- Organisation in the strip: "Ministerie van Buitenlandse Zaken"
- Tags: "diplomacy, research, mobility"
- Body:

  > Two placements in the Dutch foreign service in 2018. Istanbul came first. There I mapped Turkey's green and smart mobility sector, identified the people and organisations that mattered and wrote the opportunity analysis for Dutch organisations looking to enter sustainable transport. I also wrote policy reports on Turkish science and technology and coordinated visiting delegations.

  > Tokyo followed in the autumn. I split my time between the embassy and Shibaura House, a public architecture and civic space in Minato. I researched the impact of design interventions in public space and compared how design thinking travels between Japanese and Dutch cities. The placement ended with a featured talk on inclusive design at FORUM DESIGN KYOTO.

#### TOMICA

Source: `src/content/work/tomica.md`. All items [general].

- Title: "TOMICA"
- Summary: "My own practice: applied research, programme design and strategy for organisations working where science, society and the environment meet."
- Organisation in the strip: "TOMICA"
- Tags: "consulting, planetary-health"
- Body:

  > TOMICA is the name I work under when organisations bring me in from outside. I keep the remit narrow on purpose.

  > Most assignments ask me to read a complex body of evidence, design a programme or policy response that real teams can run and keep the political and ethical stakes in view along the way. Clients have included cultural institutions, public sector teams and research consortia.

  > The work is usually short and written, and meant to land somewhere specific: a board paper, a funding case, a programme design or a decision that was stuck. I keep the practice small so the material gets the attention it needs and the claims stay honest.

#### What Design Can Do

Source: `src/content/work/what-design-can-do.md`. All items [general].

- Title: "What Design Can Do"
- Summary: "Ran programmes for an international design platform working on social and climate briefs, including the Dutch track of the No Waste Challenge."
- Organisation in the strip: "What Design Can Do"
- Tags: "design, climate, public-engagement"
- Body:

  > What Design Can Do runs international challenges that ask designers to work on problems the market does not pay for, such as waste, energy and climate adaptation. I ran the Dutch track of the No Waste Challenge, a global call for circular design, from open submission through selection to follow-on support.

  > In parallel I led New Narrative Energy Transition with the Province of North Holland, working between creative professionals and a regional government that described the same problem in different words. I also worked on What Design Can Do LIVE.

  > The job taught me to hold a creative process and a public sector deadline together.

### Research entries

#### After the commitment: Brokerage, fragmentation and the politics of turning planetary health frameworks into operational governance

Source: `src/content/research/after-the-commitment.md`. All items [phd].

- Title: "After the commitment: Brokerage, fragmentation and the politics of turning planetary health frameworks into operational governance"
- Summary: "Why some governments turn the planetary health frameworks they sign into rules and budgets, and others do not. Built on cases in Wales, Brazil and China."
- Venue in the strip: "Doctoral Programme in Planetary Health Studies, Universidade de Lisboa"
- Tags: "planetary-health, governance, institutional-change, process-tracing, implementation"
- Body:

  > Signing is the easy part. A government adopts a framework that asks its departments to work together on health and the environment, and then the real work begins: turning it into mandates, budgets, staff and accountability. Most of the interesting failure happens after the commitment, not before it.

  > The research question reads: "under what conditions does strategic brokerage produce substantive institutional conversion of integrative planetary health frameworks, rather than implementation stalling or fragmented adoption?"

  > In plain words, the question is when the people who connect different parts of government manage to turn a framework into lasting change. An integrative framework asks several sectors, such as health and environment, to act together. Substantive institutional conversion means the framework changes how government actually works, not only what it says. Fragmented adoption is the pattern where each sector does its own part and the links between sectors never change.

  > The mechanism I study is second-stage brokerage: what an identifiable person or organisation does to link sectors after a framework has been adopted, once the political moment has passed.

  > Three cases will carry the comparison. In Wales, the Well-being of Future Generations Act 2015 put the commitment into law, and a decade of implementation now gives something to trace. In Brazil, the 2016 national adaptation plan and the AdaptaSUS plan for the health system, which runs from 2024 to 2035, bring climate and health together. Both were set by ministerial order under the national climate law of 2009. The third case is in China, around the national policy agenda of ecological civilisation.

  > Each case will be traced as a sequence of brokerage episodes, moments where an identifiable broker tries to move a framework into an institution with the authority to act on it. Each episode is coded on five dimensions: formal rules and mandates, resource allocation, monitoring and enforcement, accountability mechanisms and cross-sectoral integration.

  > The first four dimensions are scored as substantive change, procedural adoption or symbolic adoption. Roughly, that means real change, a change in procedure only or a change on paper only. The fifth, cross-sectoral integration, shows whether the sectors actually work together, and it is the one that tells fragmented adoption apart from real conversion. Fragmented adoption is a finding about a whole case, never a score on one dimension.

  > This is the only research project I run. The other entries on this page are its parts: the proposal, the literature review, a conceptual paper and the tracker I code the cases in. More will follow as I write them.

  > Work on Wales and Brazil is under way, and China comes next. São Tomé and Príncipe is held in reserve as a fourth case.

#### The Conversion Tracker

Source: `src/content/research/conversion-tracker.md`. All items [phd].

- Title: "The Conversion Tracker"
- Summary: "One structured record per case: five dimensions, the evidence behind each, an outcome category and a confidence rating. Deliberately no overall score."
- Tags: "planetary-health, governance, methods, process-tracing"
- Body:

  > Comparative work goes wrong quietly. Cases get assessed at different moments against slightly different standards, and by the end nobody can say what the difference between two scores rests on.

  > The tracker holds one record per case: the five dimensions, the evidence behind each with a pointer to where it was found, an outcome category and a confidence rating that stays visible. There is no overall score anywhere, on purpose. A single number would hide exactly the variation the comparison exists to find.

  > Records for Wales and Brazil are under way. The tracker stays private until the cases can be checked against each other.

#### Fragmented adoption: naming the pattern

Source: `src/content/research/fragmented-adoption.md`. All items [phd].

- Title: "Fragmented adoption: naming the pattern"
- Summary: "A conceptual paper naming fragmented adoption, where every sector does the work asked of it and the relationships between them stay as they were."
- Tags: "planetary-health, governance, institutional-change"
- Body:

  > Existing accounts of why adoption fails measure depth: how far a commitment reaches inside an institution. Decoupling, where an organisation adopts a policy on paper without changing its practice, is the classic case. Means-ends decoupling, where practice changes but never reaches the goal, is a close relative. That lens works when the commitment belongs to one sector.

  > Integrative frameworks do not belong to one sector. They ask sectors to change how they relate to each other, and depth cannot show whether that happened. The paper adds a second axis, scope, and names what appears in the gap: fragmented adoption. Every sector does the work asked of it, funds it and reports on it, while the relationships between sectors stay exactly as they were.

  > A system in that state passes every test applied within a single sector. The paper works the pattern through the case of Wales and its Act of 2015.

  > I first wrote it as coursework in August 2026. A journal version is planned, and I will link it here once it is published.

#### Literature review: three traditions, one demand

Source: `src/content/research/literature-review.md`. All items [phd].

- Title: "Literature review: three traditions, one demand"
- Summary: "A chapter on three governance traditions that developed in different settings and arrive at the same demand: that governance should work across sectors rather than inside them."
- Tags: "planetary-health, governance, literature-review"
- Body:

  > Planetary health, China's ecological civilisation and the Wellbeing of Future Generations tradition behind the Welsh legislation developed in different institutional settings. They are not fully independent. The Welsh tradition and ecological civilisation both grow out of the same sustainable development tradition. Read together, all three make the same demand: that governance work across the boundaries between sectors rather than inside them.

  > The chapter traces how each tradition got there, and where each runs into the same wall. Frameworks are adopted formally and then fail to produce the cross-sectoral change they ask for. That is the gap the thesis works in.

  > The chapter is still in progress. I am adding a scoping review, which maps the published research in a structured way. I will link the chapter here once it is public.

#### The research proposal

Source: `src/content/research/research-proposal.md`. All items [phd].

- Title: "The research proposal"
- Summary: "The design the thesis runs on: the question, the three cases, the five dimensions and the method, defended before the scientific committee at the University of Lisbon."
- Tags: "planetary-health, governance, process-tracing, research-design"
- Link label: "Open the defence slides"
- Body:

  > A proposal is where a thesis commits itself. It fixes the question, picks the cases and says in advance what would count as an answer and what would count as being wrong.

  > This one sets out brokerage as the mechanism and five dimensions along which a signed framework either becomes institutional practice or does not, and it compares Wales, Brazil and China. It also names the traps. Comparative work drifts when cases are coded against standards that move, so the standard is written down before the coding starts.

  > I defended it before the scientific committee at the University of Lisbon. It was not a thesis defence but a defence of the design.
