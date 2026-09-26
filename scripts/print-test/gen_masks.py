# Writes the print test shape masks as SVG, which bake_masks.mjs renders to
# PNG for public/print/. Ellipses follow the radial gradients in Shapes.astro,
# at the radius where the old soft rim crossed half strength.
import sys
out = sys.argv[1]
shapes = {
  "a": (880, 320, [(440,160,356,130),(686,198,146,92)]),
  "b": (700, 240, [(322,120,258,96),(154,96,111,69)]),
  "c": (800, 260, [(400,130,320,104),(608,94,134,66),(192,166,129,63)]),
  "d": (400, 160, [(200,80,158,63),(280,48,83,33)]),
}
seeds = {"a": 11, "b": 23, "c": 37, "d": 5}
for k,(w,h,els) in shapes.items():
    s = seeds[k]
    ell = "".join(f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}"/>' for cx,cy,rx,ry in els)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="none">
<!-- Print test mask for shape {k}. Only the alpha counts. The ellipses merge
     through a blur, a slow wobble and a fine ragged noise roughen the rim, a
     steep alpha curve keeps the edge short, and a faint mottle leaves the ink a
     little uneven. Rendered once when the image loads. Values chosen by
     eye. -->
<filter id="ink" x="0" y="0" width="{w}" height="{h}" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
<feGaussianBlur in="SourceGraphic" stdDeviation="7" result="soft"/>
<feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="{s}" result="wobble"/>
<feDisplacementMap in="soft" in2="wobble" scale="16" xChannelSelector="R" yChannelSelector="G" result="moved"/>
<feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="2" seed="{s+1}" result="fine"/>
<feColorMatrix in="fine" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" result="fineA"/>
<feComposite in="moved" in2="fineA" operator="arithmetic" k1="0" k2="1" k3="0.24" k4="-0.12" result="ragged"/>
<feComponentTransfer in="ragged" result="edge"><feFuncA type="linear" slope="8" intercept="-3.5"/></feComponentTransfer>
<feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="2" seed="{s+2}" result="mottle"/>
<feColorMatrix in="mottle" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0 0 0 0.62" result="mottleA"/>
<feComposite in="edge" in2="mottleA" operator="in"/>
</filter>
<g filter="url(#ink)">{ell}</g>
</svg>
'''
    open(f"{out}/shape-{k}.svg","w").write(svg)

