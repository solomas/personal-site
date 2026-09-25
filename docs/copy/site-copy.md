# Site copy

Every piece of visible text on the site as of 25 September 2026, branch `redesign`, exported for the copy rewrite. Nothing here changes the site. Each item names its source file.

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
- [general] "Primary" (screen reader name of the menu). Source: `src/components/Layout.astro`

### Footer
- [general] "Last updated 2026." (the year is the build year). Source: `src/components/Layout.astro`
- [general] "Contact" (footer link). Source: `src/components/Layout.astro`

### Meta description and social preview
- [general] "Tomás van Gorp. Projects, work, research." (default meta and social description, used on the home, about, contact and 404 pages). Source: `src/components/Layout.astro`
- [general] "Tomás van Gorp" (og:site_name). Source: `src/components/Layout.astro`
- [general] "Tomás van Gorp. I work, advise and research where science, society and environment meet." (og:image:alt). Source: `src/components/Layout.astro`
- [general] "Tomás van Gorp" (text in the social preview image public/og.png). Source: `scripts/og-image/og.html`
- [general] "I work, advise and research where science, society and environment meet." (text in the social preview image, science, society and environment in bold). Source: `scripts/og-image/og.html`

Page titles, meta descriptions and social titles per page are listed under each page below.

## Home, /

- [general] "Tomás van Gorp" (page title). Source: `src/pages/index.astro`
- [general] "I work, advise and research where science, society and environment meet." (hero sentence, science, society and environment in bold). Source: `src/pages/index.astro`
- [general] "Three streams of work" (screen reader name of the three sheets). Source: `src/components/HomeSheets.astro`
- [phd] "Research" (sheet title). Source: `src/components/HomeSheets.astro`
- [phd] "Doctoral work in planetary health." (sheet line). Source: `src/components/HomeSheets.astro`
- [general] "Work" (sheet title). Source: `src/components/HomeSheets.astro`
- [general] "Consulting and programme design." (sheet line). Source: `src/components/HomeSheets.astro`
- [general] "Projects" (sheet title). Source: `src/components/HomeSheets.astro`
- [general] "Side work and experiments." (sheet line). Source: `src/components/HomeSheets.astro`

## Projects index, /projects/

- [general] "Projects" (page title and heading). Source: `src/pages/projects/index.astro`
- [general] "Side work, experiments and things made out of curiosity." (intro, also the meta and social description). Source: `src/pages/projects/index.astro`

Each row shows an entry's date (month and year), title and summary, listed under Projects entries below.

## Work index, /work/

- [general] "Work" (page title and heading). Source: `src/pages/work/index.astro`
- [general] "A preview of selected projects, consulting and programme design over the years." (intro, also the meta and social description). Source: `src/pages/work/index.astro`
- [general] "Other work" (label of the fold out group). Source: `src/pages/work/index.astro`
- [general] "Earlier work, kept for record. Click to expand." (caption of the fold out group). Source: `src/pages/work/index.astro`

Each row shows an entry's date range, title and summary. Date ranges read like "Jun 2025 to present" or "Dec 2022 to Sep 2024", built by `src/utils/formatDateRange.ts`.

## Research index, /research/

- [phd] "Research" (page title and heading). Source: `src/pages/research/index.astro`
- [phd] "Doctoral work, papers, talks and notes from the field." (intro, also the meta and social description). Source: `src/pages/research/index.astro`
- [phd] "The research proposal" (deck panel title, taken from the research proposal entry). Source: `src/components/DeckPanel.astro`
- [phd] "Proposal defence slides" (deck panel link label, taken from the research proposal entry, followed by an arrow). Source: `src/components/DeckPanel.astro`

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
- [general] "I am a researcher and consultant working where science, society and environment meet.". Source: `src/pages/about.astro`
- [phd] "My doctoral research in planetary health looks at what happens after a governance framework is adopted, and why implementation so often falls short of the commitment on paper.". Source: `src/pages/about.astro`
- [general] "Alongside the PhD I advise organisations on governance, reporting and programme design.". Source: `src/pages/about.astro`
- [general] "I trained in anthropology and in arts, culture and society in the Netherlands. That background shapes how I work: I look at institutions, incentives and the people who have to make a plan run.". Source: `src/pages/about.astro`
- [general] "Contact" (closing link). Source: `src/pages/about.astro`

## Contact, /contact/

- [general] "Contact" (page title and heading). Source: `src/pages/contact.astro`
- [general] "Get in touch via hello@tomasvangorp.com." (the address is a link). Source: `src/pages/contact.astro`
- [general] "Email" (button). Source: `src/pages/contact.astro`
- [general] "LinkedIn" (button). Source: `src/pages/contact.astro`
- [general] "ORCID" (button). Source: `src/pages/contact.astro`

## 404, any unknown address

- [general] "Page not found" (page title and heading). Source: `src/pages/404.astro`
- [general] "Home" (link). Source: `src/pages/404.astro`

## Collection entries

Each entry lists what the site shows: title, summary, the strip fields, tags, link labels and the body. The role field on work entries is not shown anywhere on the site and is left out.

### Projects entries

#### loelens: scenario modelling for city property markets

Source: `src/content/projects/loelens.md`. All items [general].

- Title: "loelens: scenario modelling for city property markets"
- Summary: "A scenario tool for residential property values, live for five Dutch cities. Built on public data, honest about what it borrows."
- Status in the strip: "live"
- Tags: "housing, modelling, cities, public-data, loelens, netherlands, scenario-modelling"
- Link label: "loelens.com"
- Body:

  > Property market debate runs on assertion. Rates will rise, supply will fail, this neighbourhood will hold. Almost none of it is stated in a form anyone can check later.

  > loelens projects residential property values at postcode level under four scenarios, for five Dutch cities. Amsterdam is calibrated against its own data. Rotterdam, Utrecht, The Hague and Eindhoven read their own neighbourhood figures, but the rules that turn those figures into a price path still come from Amsterdam. The tool says so on screen rather than hiding it behind a smooth number.

  > The projections run on public data: national statistics on housing stock, valuations and transactions, plus central bank rates. A few commercial and industry figures sit alongside as on screen context and never enter the maths. A separate pipeline refreshes the sources on a fixed schedule.

  > Scenario modelling is free to use. Reports and a professional tier are built and open once payment is in place. Amsterdam came first because the data is best there, and the method is meant to travel.

### Work entries

#### ARTIS Natura Artis Magistra

Source: `src/content/work/artis.md`. All items [general].

- Title: "ARTIS Natura Artis Magistra"
- Summary: "Built ARTIS' Planetary Health programme from a single producer remit into a permanent institutional theme reaching tens of thousands of visitors."
- Organisation in the strip: "ARTIS Natura Artis Magistra"
- Tags: "planetary-health, public-engagement, cultural-institution"
- Body:

  > ARTIS is the oldest zoo in the Netherlands and considerably more than a zoo. It runs as a cultural institution that asks visitors to think about the living world, with research, art and public programming alongside the animals. The Planetary Health work started in 2022 as a scientific conference for researchers and decision makers, and grew into Aardbewoners, a public programme that kept the expert track running on the side. The audience widened across the period to include scientists, policymakers, students, families and weekend visitors in the same building. The job covered programme architecture, a multi day symposium, and the editorial line that ran across the year. The 2024 edition reached over 30,000 visitors across nine days. Aardbewoners stayed at ARTIS after the role ended.

#### Bureau Design Digitale Zaken

Source: `src/content/work/bureau-ddz.md`. All items [general].

- Title: "Bureau Design Digitale Zaken"
- Summary: "Design research and project management at a Dutch innovation agency working for ministries and city governments."
- Organisation in the strip: "Bureau Design Digitale Zaken"
- Tags: "design-research, public-sector"
- Body:

  > Bureau DDZ was a full service innovation agency in Amsterdam, now closed. Research projects on the desk mixed arts and science methods for public clients, including the Ministry of Infrastructure and Water Management and the municipalities of Amsterdam and Utrecht. Project management and stakeholder coordination across government, corporate and cultural partners ran alongside.

#### Earlier research roles

Source: `src/content/work/earlier-research-roles.md`. All items [general].

- Title: "Earlier research roles"
- Summary: "User research at Rabobank for a future financial planning product, and behavioural research at Paradiso on concert attendance patterns."
- Organisation in the strip: "Rabobank Groep and Paradiso"
- Tags: "research"
- Body:

  > Two short research roles. Rabobank ran first, with user research feeding the design of a financial planning product suite. Paradiso, the Amsterdam concert venue, followed. The brief there analysed Indiestadpas holders to find why attendance stalled, then proposed a strategy to lift average attendance from four to ten events a year.

#### Expertisecentrum Transculturele Therapie

Source: `src/content/work/ett.md`. All items [general].

- Title: "Expertisecentrum Transculturele Therapie"
- Summary: "Strategic and operational support to the executive board of a specialist mental health centre working across cultures."
- Organisation in the strip: "Expertisecentrum Transculturele Therapie"
- Tags: "healthcare, governance"
- Body:

  > ETT is a Dutch mental health centre that treats clients whose distress sits inside migration, language and cultural rupture. The board needed someone to hold the line between clinical reality, insurer demands and regulator expectations. The role sits next to the executive board. Annual plans, strategic reports and policy documents go out to insurers, auditors and internal teams, and they all read the same source. Contract cycles with health insurers and the reporting that follows run through this desk. Work with the quality manager turns operational data into decisions the board can act on. Half the job is drafting. The other half is moving information between clinicians, managers and external partners who each frame the same case differently.

#### Foundation We Are

Source: `src/content/work/foundation-we-are.md`. All items [general].

- Title: "Foundation We Are"
- Summary: "Project management for a creative collaborative running multiple social impact briefs in parallel."
- Organisation in the strip: "Foundation We Are"
- Tags: "design, project-management"
- Body:

  > Short engagement at a small Eindhoven design outfit working on briefs with a social edge. Workflow systems went in so several projects could run together without quality slipping. A short acquisition framework mapped sectors where design interventions could plausibly create value.

#### InScience Festival

Source: `src/content/work/inscience.md`. All items [general].

- Title: "InScience Festival"
- Summary: "Led the Talks Programme of the Netherlands' international science film festival, curating debates at the edge of research, film and public life."
- Organisation in the strip: "InScience International Science Film Festival"
- Tags: "public-engagement, science-communication"
- Body:

  > InScience pairs new science films with live debate. The Head of Talks Programme runs the cycle from concept to stage. Partnerships with research institutes and media houses give the programme its weight, and the editorial choices that follow decide what reaches the audience. The remit is editorial as much as logistical. Choosing which research the talks would foreground, finding speakers who could open the work to a non specialist room, and shaping questions the audience could carry past the festival itself. The 2024 edition ran across multiple venues in Nijmegen, with a cross functional team behind the production.

#### Netherlands Ministry of Foreign Affairs

Source: `src/content/work/mvbz.md`. All items [general].

- Title: "Netherlands Ministry of Foreign Affairs"
- Summary: "Two diplomatic postings researching innovation, mobility and urban design at the consulate in Istanbul and the embassy in Tokyo."
- Organisation in the strip: "Ministerie van Buitenlandse Zaken"
- Tags: "diplomacy, research, mobility"
- Body:

  > Two postings inside the Dutch foreign service in 2018. Istanbul came first. The brief there mapped the Turkish green and smart mobility ecosystem, named the stakeholders that mattered, and produced the opportunity analysis for Dutch organisations looking to enter the sustainable transport sector. Policy reports on Turkish science and technology and coordination of visiting delegations sat alongside. Tokyo followed in autumn, with the desk split between the embassy and Shibaura House, a public architecture and civic space in Minato. The work ran metropolitan design impact research on public space interventions and compared how design thinking travelled between Japanese and Dutch urban contexts. A featured talk at FORUM DESIGN KYOTO closed the posting, on inclusive design.

#### TOMICA

Source: `src/content/work/tomica.md`. All items [general].

- Title: "TOMICA"
- Summary: "My practice. Applied research, programme design and strategy for organisations working at the intersection of science, society and environment."
- Organisation in the strip: "TOMICA"
- Tags: "consulting, planetary-health"
- Body:

  > TOMICA is the name the work runs under when organisations bring me in from outside. The remit stays narrow on purpose. Assignments tend to ask three things at once. Read a complex evidence base. Design a programme or policy response that real teams can run. Hold the political and ethical stakes along the way. Clients have included cultural institutions, public sector teams and research consortia. The work is usually short, written, and meant to land somewhere specific. A board paper. A funding case. A programme architecture. A decision that was stuck. The practice stays small so the material gets the attention it needs and the claims stay honest.

#### What Design Can Do

Source: `src/content/work/what-design-can-do.md`. All items [general].

- Title: "What Design Can Do"
- Summary: "Programme delivery for an international design platform tackling social and climate briefs, including the Dutch track of the No Waste Challenge."
- Organisation in the strip: "What Design Can Do"
- Tags: "design, climate, public-engagement"
- Body:

  > What Design Can Do runs international challenges that ask designers to work on briefs that sit outside commercial demand, including waste, energy and climate adaptation. The Dutch track of the No Waste Challenge, a global call on circular design, ran through this desk from open submission to selection and follow on support. New Narrative Energy Transition ran in parallel with Provincie Noord Holland, sitting between creative professionals and a regional government that talked about the same problem in different words. What Design Can Do LIVE went through the same hands. The work taught how to hold a creative process and a public sector deadline together.

### Research entries

#### After the commitment: Brokerage, fragmentation and the politics of turning planetary health frameworks into operational governance

Source: `src/content/research/after-the-commitment.md`. All items [phd].

- Title: "After the commitment: Brokerage, fragmentation and the politics of turning planetary health frameworks into operational governance"
- Summary: "Why governments that sign integrative planetary health frameworks turn them into rules and budgets, or fail to. Comparative process tracing across Wales, Brazil and China."
- Venue in the strip: "Doctoral Programme in Planetary Health Studies, Universidade de Lisboa"
- Tags: "planetary-health, governance, institutional-change, process-tracing, implementation"
- Body:

  > Signing is the easy part. A government adopts an integrative framework, and then the work begins of turning it into mandates, budgets, staff and accountability. Most of the interesting failure happens after the commitment, not before it.

  > The thesis asks under what conditions a signed framework produces substantive institutional change rather than fragmented adoption or stalled implementation. It tests brokerage as the mechanism: who carries a framework across sectoral boundaries once the political moment has passed, and what those people can and cannot move.

  > Three cases carry the comparison. Wales, where the Well-being of Future Generations Act 2015 puts the commitment in primary legislation and gives a decade of implementation to read. Brazil, where climate and health integration has been pursued at federal level since 2016 and again since 2024, resting on multilateral agreement and domestic scientific authority rather than statute. China, where ecological civilisation policy has been translated into local accounting practice in Lishui, Zhejiang.

  > Each case is traced as a sequence of brokerage episodes and coded across five dimensions: formal rules and mandates, resource allocation, monitoring and enforcement, accountability mechanisms, and cross sectoral integration. Each dimension resolves as substantive conversion, fragmented adoption or implementation stalling. The five exist to separate a framework that changed how a state works from one that changed how a state talks.

  > This is the only research project I run. The entries alongside this one are its parts: the proposal, the literature review, a conceptual paper and the tracker the coding runs on. More will follow as they are written.

  > Wales is coded. Brazil is scoped and in progress. China follows. São Tomé and Príncipe is held in reserve as a fourth case.

#### The Conversion Tracker

Source: `src/content/research/conversion-tracker.md`. All items [phd].

- Title: "The Conversion Tracker"
- Summary: "A structured record for each case: five dimensions, the evidence behind each, an outcome class and a confidence rating. No aggregate score anywhere."
- Tags: "planetary-health, governance, methods, process-tracing"
- Body:

  > Comparative work goes wrong quietly. Cases get coded at different moments against slightly different standards, and by the end nobody can say what the difference between two scores rests on.

  > The tracker is one record per case. Five dimensions, the evidence behind each with its locator, an outcome class and a confidence rating that stays visible. There is no aggregate score anywhere, on purpose. A single number would hide exactly the variation the comparison exists to find.

  > Wales is coded. Brazil is scoped. It is not public yet, and will be opened once enough cases sit in it to be worth reading.

#### Fragmented adoption: naming the pattern

Source: `src/content/research/fragmented-adoption.md`. All items [phd].

- Title: "Fragmented adoption: naming the pattern"
- Summary: "A conceptual paper naming fragmented adoption, where every sector does the work asked of it and the relationships between them stay as they were."
- Tags: "planetary-health, governance, institutional-change"
- Body:

  > Accounts of adoption failure measure depth, how far a commitment reaches inside an institution. Decoupling, means ends decoupling and so on. That axis works when the commitment is one sector's to keep.

  > Integrative frameworks are not. They ask sectors to change how they relate to each other, and depth cannot see whether that happened. The paper adds a second axis, scope, and names what shows up in the gap: fragmented adoption, where every sector does the work asked of it, resources it and reports it, and the relationships between them are exactly as they were. A system in that state passes every within sector test. The Welsh Act 2015 is the case it is worked through.

  > Written for an elective on urban and regional systems and sustainability. Drafted, with an eye on submission. It will be linked here if it is published.

#### Literature review: three traditions, one demand

Source: `src/content/research/literature-review.md`. All items [phd].

- Title: "Literature review: three traditions, one demand"
- Summary: "A chapter tracing three governance traditions that developed apart and arrived at the same demand, that governance act across sectoral boundaries rather than within them."
- Tags: "planetary-health, governance, literature-review"
- Body:

  > Planetary health, ecological civilisation and the sustainable development tradition that produced the Welsh legislation each grew up separately and out of different politics. Read together they turn out to make the same demand: that governance act across sectoral boundaries rather than within them.

  > The chapter traces how each arrived there, and where each runs into the same wall. Frameworks get adopted formally and then fail to produce the cross sectoral change they ask for. That is the gap the thesis works in.

  > Drafted, not yet published. It will be linked here if it becomes public.

#### The research proposal

Source: `src/content/research/research-proposal.md`. All items [phd].

- Title: "The research proposal"
- Summary: "The design the thesis runs on: the question, the three cases, the five dimensions and the method, defended before the scientific committee at ULisboa."
- Tags: "planetary-health, governance, process-tracing, research-design"
- Link label: "Proposal defence slides"
- Body:

  > A proposal is where a thesis commits itself. It fixes the question, picks the cases and says in advance what would count as an answer and what would count as being wrong.

  > This one sets out brokerage as the mechanism, Wales, Brazil and China as the comparison and five dimensions along which a signed framework either becomes institutional practice or does not. It also names the traps. Comparative work drifts when cases get coded against standards that move, so the standard is written down before the coding starts.

  > Defended before the scientific committee at Universidade de Lisboa. Not a thesis defence, a defence of the design.
