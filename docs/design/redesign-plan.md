# Redesign plan: primary layers

Approved by Tomás on 25 September 2026. Phase 1 cleaned up the code and kept the old look. Phase 2 built the folded layers version. Phase 3 turned it monochrome with round drifting shapes and focus on hover. Phase 4 brings in three primary colours with fixed roles, one red mark, two shapes, a 70s stripe and focus on hover across all entries. This file describes the phase 4 target.

## Concept
The site is a stack of translucent sheets above a slow field of two soft round shapes and one 70s stripe. Depth comes from layers, a light top edge and a darker bottom edge. No colour gradients as decoration. Glass is for navigation, panels and buttons only. Long text sits on a solid reading sheet.

## Palette
Three primaries: blue #0033A0, red #E30613, yellow #FFD100.

Day theme (stored as "mist"):
- ground #FFFFFF, ink #000000, muted #595959
- blue leads: links, the active nav link, the focus ring and text selection (white text on blue)
- yellow only for large shapes, never for text or small elements
- glass: white at about 55 percent with a light top edge and a darker bottom edge
- reading sheet #FFFFFF

Night theme (stored as "flip"):
- ground #000000, ink #FFFFFF, muted #A6A6A6
- yellow leads: links, the active nav link, the focus ring and text selection (black text on yellow)
- blue only for large shapes
- glass: reads as white at about 8 percent over black, with a slightly brighter top edge. Over the blue shape the glass darkens what lies behind it, so muted text keeps AA contrast.
- reading sheet #141414

Red appears exactly once per page in both themes: a small red dot next to the name in the nav. The favicon is the same red dot. Nothing else on the site is red.

The focus ring is 2px in the lead colour with a 2px ring in the ground colour around it. The active nav link is bold in the lead colour and carries aria-current.

Muted text only sits on glass or sheets, never directly on the background.

Every text and background pair must pass WCAG AA contrast, including lead colour and muted text on glass over the shapes.

## Background
Two large, soft, round shapes in the theme's shape colour: yellow in day, blue in night. Their edges fade through radial gradients, not through a blur filter. The shapes never overlap each other or the stripe, because blurred overlaps of primaries would mix into green or orange.

One 70s stripe: three parallel rounded bands sweeping in an arc, blue and yellow in both themes, flat, drifting slowly like the shapes. No text or glass ever lies over the stripe, since text on either band fails contrast in one theme.

A fine static grain lies over the shapes and the stripe and under the glass at very low opacity in both themes.

Sheets, panels and the nav have large rounded corners. No glow, no neon, no gradient text, no shiny or 3D effects.

## Type
One family: Geist, self-hosted in the repo.

## Layout
Home: floating glass navigation, the hero sentence, then Research, Work and Projects as three overlapping glass sheets with one line each. No numbering.
Index pages: page title and a short intro, then one glass panel with entries as rows split by hairlines. Other work on the work page folds open inside the same panel. The research page opens with a prominent glass panel that links to the proposal defence deck.
Detail pages: one shared layout for all three collections. A glass header strip with stream, date and organisation, a reading sheet 68 characters wide and left aligned, and a footer with tags and links for all three.
Contact: one glass panel.
Removed: numbered markers, the © label with (01), mono labels and the custom cursor.

## Motion
- The shapes and the stripe drift slowly and without end. Each shape has its own cycle between 60 and 120 seconds, so the pattern never visibly repeats. Only transform moves: position, a little scale and a little rotation. No animated filters.
- On detail pages the shapes move three times slower.
- The animation pauses while the tab is hidden.
- On the first visit the home sheets settle into their stack, using the existing triptych-revealed key.
- Focus on hover: when a highlight is hovered or has keyboard focus, everything else on the page fades and blurs over roughly 250ms while the active item stays sharp. On the home page the highlights are the three sheets, everything else fades to about 40 percent and blurs about 2px, and the active sheet lifts a little. On the index pages the highlights are the rows, the Other work cards and the deck panel, and the lighter version fades to about 60 percent with about 1px of blur. Hover only applies on devices that support hover. Keyboard focus works everywhere. Browsers without :has() do not get the effect. One shared piece of code drives both versions.
- Other motion only answers the visitor, such as a sheet lifting a little on hover.
- Reduced motion: the shapes and the stripe stand still, nothing animates or transitions, and the focus effect fades without blur.
- Solid sheets as fallback where backdrop-filter is missing or the visitor asks for reduced transparency.

## Themes
The first visit follows the system setting. The flip button switches between day and night. The localStorage key "theme" stores "flip" for night and "mist" for day. The head script stays so there is no flash.

## Copy
Copy stays as it is for now. It will be rewritten in a later pass, so every layout must work with shorter or longer text.
