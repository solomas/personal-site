# Redesign plan: monochrome layers

Approved by Tomás on 25 September 2026. Phase 1 cleaned up the code and kept the old look. Phase 2 built the folded layers version. Phase 3 turns it monochrome, replaces the folds with round drifting shapes and adds focus on hover. This file describes the phase 3 target.

## Concept
The site is a stack of translucent sheets above a slow field of soft round shapes. Depth comes from layers, a light top edge and a darker bottom edge. No colour. No colour gradients as decoration. Glass is for navigation, panels and buttons only. Long text sits on a solid reading sheet.

## Palette
Day theme (stored as "mist"):
- ground #F2F2F2
- sheet #FFFFFF
- ink #000000
- muted #595959
- shapes in greys between #E6E6E6 and #B0B0B0
- glass: white at about 55 percent with the light top edge and the darker bottom edge

Night theme (stored as "flip"):
- ground #000000
- sheet #141414
- ink #FFFFFF
- muted #A6A6A6
- shapes in greys between #1A1A1A and #404040
- glass: black at about 55 percent with the light top edge and the darker bottom edge

No accent colour. Links are underlined. The active nav link is bold and carries aria-current. The focus ring is 2px ink with a 2px ring in the ground colour around it. Text selection inverts ink and ground.

Muted text only sits on glass or sheets, never directly on the background.

Every text and background pair must pass WCAG AA contrast, including muted text on glass over the lightest and the darkest shape.

## Background
Four to six large, soft, rounded organic shapes in the greys above. Their edges fade through radial gradients, not through a blur filter. A fine static grain lies over the shapes and under the glass at very low opacity in both themes. It also breaks up banding in the dark greys.

## Type
One family: Geist, self-hosted in the repo.

## Layout
Home: floating glass navigation, the hero sentence, then Research, Work and Projects as three overlapping glass sheets with one line each. No numbering.
Index pages: page title and a short intro, then one glass panel with entries as rows split by hairlines. Other work on the work page folds open inside the same panel. The research page opens with a prominent glass panel that links to the proposal defence deck.
Detail pages: one shared layout for all three collections. A glass header strip with stream, date and organisation, a reading sheet 68 characters wide and left aligned, and a footer with tags and links for all three.
Contact: one glass panel.
Removed: numbered markers, the © label with (01), mono labels and the custom cursor.

## Motion
- The shapes drift slowly and without end. Each shape has its own cycle between 60 and 120 seconds, so the pattern never visibly repeats. Only transform moves: position, a little scale and a little rotation. No animated filters.
- On detail pages the shapes move three times slower.
- The animation pauses while the tab is hidden.
- On the first visit the home sheets settle into their stack, using the existing triptych-revealed key.
- Focus on hover: on the home page, when one of the three sheets is hovered or has keyboard focus, everything else (the other two sheets, the hero sentence, the nav and the footer) fades to about 40 percent and blurs about 2px over roughly 250ms. The active sheet stays sharp and lifts a little. Hover only applies on devices that support hover. Keyboard focus works everywhere. Browsers without :has() do not get the effect.
- Other motion only answers the visitor, such as a sheet lifting a little on hover.
- Reduced motion: the shapes stand still, nothing animates or transitions, and the focus effect fades without blur.
- Solid sheets as fallback where backdrop-filter is missing or the visitor asks for reduced transparency.

## Themes
The first visit follows the system setting. The flip button switches between day and night. The localStorage key "theme" stores "flip" for night and "mist" for day. The head script stays so there is no flash.

## Copy
Copy stays as it is for now. It will be rewritten in a later pass, so every layout must work with shorter or longer text.
