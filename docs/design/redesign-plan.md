# Redesign plan: folded layers

Approved by Tomás on 25 September 2026. Phase 1 cleans up the code and keeps the current look. Phase 2 builds this plan.

## Concept
The site is a stack of translucent sheets above a folded background. Depth comes from layers, a light top edge and a darker bottom edge. No colour gradients as decoration. Glass is for navigation, panels and buttons only. Long text sits on a near solid reading sheet.

## Palette
Default theme, mist:
- ground #E6EAE5
- fold light #F2F4F0
- fold shadow #C8D0C9
- ink #16211C
- muted #56615B
- accent #FFD60A for focus rings, active markers and hover edges, never as text colour in this theme
- glass: white at 45 percent with a white top edge at 70 percent and an ink bottom edge at 10 percent
- reading sheet #F7F8F5 at 94 percent

Flip theme, night:
- ground #0F1614
- fold light #1D2724
- fold shadow #070B0A
- ink #EEF1EC
- muted #93A099
- accent #FFD60A, also allowed for text and links
- glass: #1D2724 at 55 percent with a white top edge at 12 percent
- reading sheet #141C19 at 94 percent

Every text and background pair must pass WCAG AA contrast.

## Type
One family: Geist, self-hosted in the repo. Inter and Geist Mono are removed.

## Layout
Home: floating glass navigation, the hero sentence, then Research, Work and Projects as three overlapping glass sheets with one line each. No numbering.
Index pages: page title and a short intro, then one glass panel with entries as rows split by hairlines. Other work on the work page folds open inside the same panel.
Detail pages: one shared layout for all three collections. A glass header strip with stream, date and organisation, a reading sheet 68 characters wide and left aligned, and a footer with tags and links for all three.
Contact: one glass panel.
Removed: numbered markers, the © label with (01), mono labels and the custom cursor.

## Motion
One moment: on the first visit the home sheets settle into their stack, using the existing triptych-revealed key. Otherwise motion only answers the visitor, such as a sheet lifting slightly on hover. One global reduced motion rule. Solid sheets as fallback where backdrop-filter is missing or the visitor asks for reduced transparency.

## Themes
The first visit follows the system setting. The flip button switches between mist and night and keeps the existing localStorage key "theme" with the value "flip" for night. The head script stays so there is no flash.

## Copy
Copy stays as it is for now. It will be rewritten in a later pass, so every layout must work with shorter or longer text.
