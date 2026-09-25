# Redesign plan: two colour layers

Approved by Tomás on 25 September 2026. Phase 1 cleaned up the code and kept the old look. Phase 2 built the folded layers version. Phase 3 turned it monochrome with round drifting shapes and focus on hover. Phase 4 brought in the primaries, a red mark and a 70s stripe. Phase 5 narrows each theme to two surface colours, drops red and the stripe, makes the shapes larger and bolder, collapses the navigation and adds an about page. Phase 6 added page transitions, a 404 page and launch metadata. Phase 7 fades the shapes to about a third of their strength and puts the menu in the bar on every page. This file describes the phase 7 target.

## Concept
The site is a stack of translucent sheets above a slow field of large, soft, organic shapes. Depth comes from layers, a light top edge and a darker bottom edge. No colour gradients as decoration. Glass is for navigation, panels and buttons only. Long text sits on a solid reading sheet.

## Palette
Each theme uses two surface colours only: the ground and the shape colour. One highlight colour carries links, the active nav link, the focus ring and text selection.

Day theme (stored as "mist"):
- ground #FFFFFF, shapes yellow #FFD100
- highlight blue #0033A0, selection in white on blue
- text black #000000, muted #595959
- glass: white at about 55 percent with a light top edge and a darker bottom edge
- reading sheet #FFFFFF

Night theme (stored as "flip"):
- ground #000000, shapes blue #0033A0
- highlight yellow #FFD100, selection in black on yellow
- text white #FFFFFF, muted #A6A6A6
- glass: reads as white at about 8 percent over black, with a slightly brighter top edge. Over the blue shapes the glass darkens what lies behind it, so muted text keeps AA contrast.
- reading sheet #141414

No red anywhere on the site.

The favicon is a plain circle: blue on light browser themes, yellow on dark ones, through a prefers-color-scheme query inside the SVG. The .ico fallback is a blue circle.

The focus ring is 2px in the highlight colour with a 2px ring in the ground colour around it. The active nav link is bold in the highlight colour and carries aria-current.

Muted text only sits on glass or sheets, never directly on the background.

Every text and background pair must pass WCAG AA contrast, including highlight and muted text on glass over the shapes.

## Background
Three or four large, stretched, organic shapes in the theme's shape colour, shown at about a third of full strength: a pale yellow wash in day and a dim, deep blue in night. Soft edges come from radial gradients rather than a blur filter. They may overlap, since they share one colour. A fine static grain lies over the shapes and under the glass at very low opacity in both themes.

Sheets, panels and the nav have large rounded corners. No glow, no neon, no gradient text, no shiny or 3D effects.

## Type
One family: Geist, self-hosted in the repo.

## Layout
Navigation: a floating glass bar. On the home page it shows only the name and the theme button, because the sheets already link to the streams. On every other page the links (Projects, Work, Research, About, Contact) collapse behind a menu button in the bar. The button carries aria-expanded, works with the keyboard and Escape closes it. Without JavaScript the links show open.
Home: the glass bar, the hero sentence, then Research, Work and Projects as three overlapping glass sheets with one line each. No numbering.
Index pages: page title and a short intro, then one glass panel with entries as rows split by hairlines. Other work on the work page folds open inside the same panel. The research page opens with a prominent glass panel that links to the proposal defence deck.
Detail pages: one shared layout for all three collections. A glass header strip with stream, date and organisation, a reading sheet 68 characters wide and left aligned, and a footer with tags and links for all three.
About: the detail page layout, with a glass header strip holding the title and a reading sheet that ends with a link to contact.
Contact: one glass panel.
Removed: numbered markers, the © label with (01), mono labels, the custom cursor, the red mark and the stripe.

## Motion
- The shapes drift slowly and without end. Each shape has its own cycle between 60 and 120 seconds, so the pattern never visibly repeats. Only transform moves: position, a little scale and a little rotation. No animated filters.
- On detail pages the shapes move three times slower.
- The drift follows a clock shared across pages, so the shapes carry on where they were when the visitor moves to another page instead of jumping back to their start.
- The animation pauses while the tab is hidden.
- On the first visit the home sheets settle into their stack, using the existing triptych-revealed key.
- Focus on hover: when a highlight is hovered or has keyboard focus, everything else on the page fades and blurs over roughly 250ms while the active item stays sharp. On the home page the highlights are the three sheets, everything else fades to about 40 percent and blurs about 2px, and the active sheet lifts a little. On the index pages the highlights are the rows, the Other work cards and the deck panel, and the lighter version fades to about 60 percent with about 1px of blur. Hover only applies on devices that support hover. Keyboard focus works everywhere. Browsers without :has() do not get the effect. One shared piece of code drives both versions.
- Page transitions: cross document view transitions in CSS, so every page stays a normal page load and browsers without support load pages as usual. When a visitor opens a page from a home sheet or a row, that element grows into the header of the new page: the glass strip on detail pages, the title and intro on index pages. Going back, the header shrinks into the element again. Everything else crossfades in about 300ms. The shapes stay out of the transition and keep drifting. No transition under reduced motion. The deck panel opens the deck, a standalone page outside the site layout, which loads normally.
- Other motion only answers the visitor, such as a sheet lifting a little on hover.
- Reduced motion: the shapes stand still, nothing animates or transitions, and the focus effect fades without blur.
- Solid sheets as fallback where backdrop-filter is missing or the visitor asks for reduced transparency.

## Themes
The first visit follows the system setting. The flip button switches between day and night. The localStorage key "theme" stores "flip" for night and "mist" for day. The head script stays so there is no flash.

## Copy
Copy stays as it is for now. It will be rewritten in a later pass, so every layout must work with shorter or longer text.
