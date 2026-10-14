# Review oktober 2026

Branch `site-review-oktober`, vanaf `main` op a2b42dc. Niets naar `main`, niets gemerged, niets naar productie.

Preview: https://site-review-oktober.tomasvangorp.pages.dev

## Wat er uit de certificaten kwam

| Certificaat | Organisatie | Cursus of module | Datum | Soort |
|---|---|---|---|---|
| Climate and Health Medicine June 5 Certificate-212.pdf | Global Consortium on Climate and Health Education (Columbia Mailman School of Public Health) en European Network on Climate and Health Education. Logo's ook van University of Glasgow en Sustainable Markets Initiative | Climate and Health Medicine: A Clinical Training Program for Healthcare Educators, 24 uur, eindexamen gehaald | 5 juni 2026 | Certificate of participation |
| ISGlobal 2026-M2.pdf | ISGlobal, Barcelona Institute for Global Health | International Spring School in Global Health, Module 2: Understanding and assessing the impact of research in society (10 uur) | 08/05/26, cursus online 23 tot 27 maart 2026 | Deelname ("has participated in the") |
| ISGlobal 2026-M3.pdf | idem | Module 3: Intersectionality and gender: advancing equity in health research (10 uur) | idem | idem |
| ISGlobal 2026-M5.pdf | idem | Module 5: Climate change, sustainable work practices, and green jobs: research methods in occupational health (10 uur) | idem | idem |

Alles was leesbaar. Twee dingen wijken af van je achtergrondinformatie:

- ASPHER en Health Care Without Harm Europe staan niet op het Climate and Health certificaat. Ik heb alleen de twee netwerken genoemd die er wel op staan en die jij ook noemde.
- Het congrescertificaat (Certificado de presença) noemt als organisator het Conselho Português para a Saúde e Ambiente (CPSA). De Fundação Calouste Gulbenkian is de locatie in Lissabon. De titel op het certificaat is "2º Congresso Nacional da Saúde e Ambiente", met "da", terwijl de bestandsnaam "de" heeft. De uitgecommentarieerde regel volgt het certificaat.

## Taak 1: certificaten

- Nieuw bestand `src/data/training.ts`. Per cursus titel, organisatie, jaar, datum, soort certificaat en eventueel modules. Op de site komen alleen titel, organisatie, jaar en modules. Een nieuwe cursus (Code in Place en andere) is één object erbij.
- Het congres staat als uitgecommentarieerde regel in hetzelfde bestand. Haal de twee slashes aan het begin van die regel weg om het te tonen.
- `src/pages/about.astro`: na de alinea over je opleiding een kop "Training", één regel inleiding en een lijst. De ISGlobal modules staan in één item, gescheiden door een middenpunt, zoals de stroken op de detailpagina's.
- Commit 10ab6d4.

Nieuwe tekst, letterlijk:

> Training
>
> Short courses I have taken alongside the PhD.
>
> - Climate and Health Medicine: A Clinical Training Program for Healthcare Educators, Global Consortium on Climate and Health Education and European Network on Climate and Health Education, 2026
> - International Spring School in Global Health, ISGlobal, Barcelona Institute for Global Health, 2026. Modules: Understanding and assessing the impact of research in society · Intersectionality and gender: advancing equity in health research · Climate change, sustainable work practices, and green jobs: research methods in occupational health

Keuze bij twijfel: de titels staan zoals ze op de certificaten gedrukt zijn. Daardoor staat er "Program" (Amerikaans) en in module 5 een Oxford comma ("practices, and green jobs"). CLAUDE.md verbiedt de Oxford comma en vraagt bij een eigennaam eerst jou te vragen. Jij vroeg om geen vragen en om exacte namen, dus heb ik de officiële titels laten staan. Wil je dat niet, haal dan in `src/data/training.ts` de komma voor "and green jobs" weg.

## Taak 2: verbeteringen

**Navigatie.** `src/components/Layout.astro`: het menu is nu Research, Work, Projects, About, Contact. Commit 58c12ec.

**Homepage.** `src/pages/index.astro`: één regel onder de kop, in dezelfde stijl als de intro op de Research en Work pagina's. Commit 121b9d7.

> I'm doing a PhD at the University of Lisbon and support the executive board of a Dutch mental health centre. Earlier I designed and ran programmes for organisations such as ARTIS and InScience.

**Research pagina.** `src/pages/research/index.astro`: de losse kaart met de defence slides is weg. Het voorstel staat nu alleen nog als item in de lijst. Op de pagina van het voorstel staat de link "Open the defence slides" al, die blijft. `src/components/DeckPanel.astro` heb ik niet verwijderd, het wordt alleen niet meer gebruikt. Commit 36a69c8.

- Slash: de link `/after-the-commitment-proposal-defence` heeft geen slash aan het eind, en dat klopt. Met een slash antwoordt Cloudflare met een 308 naar het adres zonder slash. Niets veranderd.
- Zonder JavaScript: de pagina toont niet "Unpacking...", want dat bericht wordt dan verborgen. Je ziet de plaatshouder van de eerste dia (een blauwe streep en twee zwarte balken) en linksonder "This page requires JavaScript to display." Gecontroleerd op de live site met JavaScript uit. Niets aan de slides veranderd.

**Titelkaart.** `src/components/ThesisPanel.astro`: er ontbrak inderdaad een spatie na "After the commitment:". Op het scherm zag je dat niet, omdat de twee delen onder elkaar staan, maar de linktekst, schermlezers en gekopieerde tekst lazen "commitment:Brokerage". Hersteld. Commit 460bb50.

**Work pagina, ETT.** `src/content/work/ett.md`: alleen de samenvatting kreeg een zin vooraan. Die samenvatting staat in de lijst en ook bovenaan de ETT pagina. De rest van de tekst is niet aangeraakt. Commit 4a90ee9.

> An assignment through my own practice, TOMICA. Supporting the executive board of a specialist mental health centre that works across cultures, on strategy and operations.

Zinnen op de ETT detailpagina die lezen als een functie in dienst in plaats van een opdracht:

1. "The board needed someone to hold the line between clinical reality, what insurers demand and what regulators expect." (klinkt als een vacature die is ingevuld)
2. "I work next to the executive board." (klinkt als een plek in de organisatie)
3. "The contract cycles with health insurers, and the reporting that follows, run through me." (klinkt als een vaste verantwoordelijkheid binnen de staf)
4. "With the quality manager I turn operational data into decisions the board can act on." (collega's naast elkaar)
5. "Half the job is drafting." ("job" in plaats van opdracht)
6. Niet zichtbaar op de site maar wel in het bestand: `role: Board Support Officer`. Dat is een functietitel.

**Contact pagina.** `src/pages/contact.astro`: de knop "Email" is weg, het adres in de zin blijft, omdat je dat kunt lezen en kopiëren. LinkedIn en ORCID blijven als knoppen. Eén zin erbij en een eigen meta description. Commit 93670e3.

> Write to me at hello@tomasvangorp.com. I'm open to consulting projects and research collaborations, in Dutch or English.

Meta description:

> Write to Tomás van Gorp about consulting projects or research collaborations, in Dutch or English.

**Controle van alle pagina's.**

- Meta descriptions: elke pagina heeft er precies één. Contact had die van de homepage, nu hersteld. De 404 pagina deelt nog die van de homepage. Dat laat ik zo, want de 404 pagina staat op noindex en zoekmachines tonen hem niet.
- Alt teksten: de site heeft geen `img` elementen. De enige svg's zijn decoratief.
- Lang attribuut: alle pagina's hebben `lang="en"`. Alleen de buitenste pagina van de defence slides had er geen. Daar staat nu `lang="en-GB"`, dezelfde waarde als de slides zelf al hebben. Eén attribuut, de slides zijn niet opnieuw gebouwd en werken nog. Commit 7293da0.
- Interne links: geen enkele link zonder doel, in de build en op de preview.

**Overig.** `docs/copy/site-copy.md` bijgewerkt (abe4f7a). Sessieverslag `docs/sessions/2026-10-14a-site-review.md` en de state docs `content.md` en `optional-features.md` bijgewerkt.

## Controle

- `bash scripts/check-prose.sh` schoon, `npm run build` zonder fouten, 22 pagina's.
- Preview: alle 22 pagina's uit de sitemap en alle 26 interne adressen geven 200, een onbekend adres geeft 404.
- In headless Chrome bekeken: home, about, research, de pagina van het voorstel, work en contact op 1440 en 390 pixels breed, in dag en nacht. Schermafbeeldingen in `~/Documents/personal-site-screenshots/2026-10-14-site-review/`. Niets viel uit de vorm. Op een echte telefoon heb ik niet gekeken.

## Wat ik bewust niet heb gedaan

- De Governance Scan niet aangeraakt.
- Geen ontwerpwijzigingen. De regel onder de kop op de homepage gebruikt dezelfde tokens als de intro op de streampagina's. De Training lijst gebruikt de bestaande `.prose` stijl.
- De tekst op de ETT pagina niet herschreven, zie de lijst hierboven.
- `DeckPanel.astro` niet verwijderd.
- De slides niet herbouwd. Alleen het lang attribuut toegevoegd.
- Niet naar `main` gepusht, niets gemerged, niets naar productie. Alleen de branch gepusht, omdat Cloudflare Pages daar automatisch een preview van maakt.
- ASPHER en Health Care Without Harm Europe niet genoemd, omdat ze niet op het certificaat staan.

## Wat beter kan, buiten deze opdracht

- Op de Work pagina staan TOMICA en ETT nog steeds allebei met "to present". De nieuwe zin helpt, maar je zou ETT ook onder TOMICA kunnen tonen, of in de TOMICA tekst naar ETT kunnen verwijzen.
- Datums zijn niet gelijk: Research schrijft "Sept 2026", Work schrijft "Sep 2025". Twee verschillende datumfuncties.
- Op een telefoon is het ISGlobal item in Training een lang blok tekst. Een sublijst met de modules leest makkelijker, maar dan is het geen één regel meer.
- De slides hebben geen meta description, en hun paginatitel ("Strategic brokerage and institutional conversion in planetary health governance") wijkt af van de titel van het proefschrift.
- Zonder JavaScript tonen de slides alleen balken. Een link terug naar de pagina van het voorstel zou helpen, maar dan moet je in het gegenereerde bestand werken.
- Uit de state docs, nog open: Cloudflare's e-mailbeveiliging maakt de mailto link zonder JavaScript kapot, en de Astro 7 upgrade voor de npm audit.

## Van branch naar main, stap voor stap

1. Bekijk de preview op https://site-review-oktober.tomasvangorp.pages.dev, ook op je telefoon en in nachtmodus. Pas eerst aan wat je anders wilt, op de branch.
2. Ga naar de repo: `cd ~/code/personal-site`.
3. Ga naar main: `git checkout main`. Je werkt nu op de versie die live staat.
4. Haal de laatste stand van GitHub op: `git pull`. Zo merge je niet op een oude versie.
5. Merge de branch met een eigen merge commit: `git merge --no-ff site-review-oktober`. De `--no-ff` zorgt dat je de hele review later met één commando terug kunt draaien. Git opent een editor voor het commitbericht. Sla op en sluit.
6. Controleer: `bash scripts/check-prose.sh` en `npm run build`. Beide moeten zonder fouten eindigen.
7. Zet het online: `git push origin main`. Cloudflare Pages bouwt main en zet het binnen ongeveer een minuut live op tomasvangorp.com.
8. Kijk op tomasvangorp.com of de About pagina het Training blok toont en het menu met Research begint.
9. Gaat er iets mis, zoek dan de hash van de merge commit op met `git log --oneline -3` en draai alles in één keer terug met `git revert -m 1 <hash>` en daarna `git push origin main`.
10. De branch mag blijven staan, zoals de eerdere branches. Verwijderen hoeft niet.

## Sessie 2

Zelfde branch, `site-review-oktober`. Niets naar `main`, niets gemerged. De opdracht met de globe en de tracker op de homepage heb ik niet uitgevoerd, omdat je die verving voordat er iets veranderd was.

### Wat er veranderd is

**Homepage.** `src/pages/index.astro` is weer precies de versie van `main`: de kop en de kaarten Research, Work en Projects. De regel onder de kop is weg. Commit 07a575f.

**Work pagina.** `src/pages/work/index.astro`: nieuwe intro onder de kop, in dezelfde stijl als de oude. De meta description is de oude introzin gebleven. Commit 3ec2224.

> I'm doing a PhD at the University of Lisbon and support the executive board of a Dutch mental health centre. Earlier I designed and ran programmes for organisations such as ARTIS and InScience.

**Certificaten.** Commit 4bc225e.

- Gekopieerd, ongewijzigd, naar `public/certificates/`: `climate-and-health-medicine-2026.pdf`, `isglobal-2026-m2.pdf`, `isglobal-2026-m3.pdf` en `isglobal-2026-m5.pdf`.
- Persoonsgegevens: op alle vier staat alleen je naam. Geen e-mailadres, geboortedatum of identiteitsnummer, ook niet in de tekstlaag of de metadata van de PDF's. De QR-code op de ISGlobal certificaten linkt naar de verificatiepagina van ISGlobal. Die toont je naam, de cursus, de module en de datum, verder niets. Alle vier zijn daarom gepubliceerd.
- `src/data/training.ts`: elk item heeft een `certificate` met het pad naar de PDF, en elke ISGlobal module heeft een eigen `certificate`. Het congres blijft uitgecommentarieerd, zonder PDF.
- About: bij Climate and Health Medicine staat "View certificate (PDF)". Bij ISGlobal is elke moduletitel zelf de link, met "(PDF)" erachter. Alle links openen in een nieuw tabblad. Schermlezers horen bijvoorbeeld "View certificate for Climate and Health Medicine: A Clinical Training Program for Healthcare Educators (PDF, opens in a new tab)".

Nieuwe tekst op About, letterlijk (links tussen haken):

> - Climate and Health Medicine: A Clinical Training Program for Healthcare Educators, Global Consortium on Climate and Health Education and European Network on Climate and Health Education, 2026. [View certificate (PDF)]
> - International Spring School in Global Health, ISGlobal, Barcelona Institute for Global Health, 2026. Modules: [Understanding and assessing the impact of research in society (PDF)] · [Intersectionality and gender: advancing equity in health research (PDF)] · [Climate change, sustainable work practices, and green jobs: research methods in occupational health (PDF)]

Keuze bij twijfel: bij ISGlobal staat geen aparte "View certificate" link, want er zijn drie certificaten. Elke moduletitel is zelf de link, zoals je vroeg. Drie keer "View certificate" achter elkaar zou er ook kunnen staan, maar dan zijn drie links met dezelfde tekst lastig uit elkaar te houden.

**Contact.** `src/pages/contact.astro`, commit 23a0dac:

> Write to me at hello@tomasvangorp.com. I'm open to consulting projects and research collaborations.

**Overig.** `docs/copy/site-copy.md` bijgewerkt (39a7253). Sessieverslag `docs/sessions/2026-10-14b-site-review-2.md`, en `docs/state/content.md` bijgewerkt.

### Controle

- `bash scripts/check-prose.sh` schoon, `npm run build` zonder fouten.
- 243 interne links in de build, waaronder de vier PDF links. Alle wijzen naar een bestaand bestand.
- Home, Work, About en Contact bekeken op 1440 en 390 pixels breed, in dag en nacht. Schermafbeeldingen in `~/Documents/personal-site-screenshots/2026-10-14-site-review-2/`.
- Branch gepusht, de preview is bijgewerkt.

### Wat ik bewust niet deed

- Geen globe, tracker of andere nieuwe vormgeving op de homepage.
- De meta description van de contactpagina niet aangepast. Daar staat nog "in Dutch or English". Je vroeg alleen de zin op de pagina te wijzigen. Wil je hem gelijk trekken, dan staat hij bovenaan `src/pages/contact.astro`.
- De meta description van de Work pagina niet aangepast, zoals gevraagd.
- De PDF's niet bewerkt of verkleind. Ze staan er zoals ze uit Drive kwamen, samen ongeveer 2,3 MB.
- Geen bestanden verwijderd. De bestanden in Drive staan er nog.
