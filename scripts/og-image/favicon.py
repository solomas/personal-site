# Draws public/favicon.ico: the yellow circle with a thin black rim, as in
# favicon.svg on light browser themes, at 16, 32 and 48 pixels. Each size is
# drawn eight times larger and scaled down for smooth edges.
# Usage, from the repo root: python3 scripts/og-image/favicon.py
from PIL import Image, ImageDraw
frames = []
for size in (16, 32, 48):
    s = 8
    big = Image.new("RGBA", (size * s, size * s), (0, 0, 0, 0))
    d = ImageDraw.Draw(big)
    # Same geometry as the SVG: radius 12 of 32 with a 1.5 wide rim centred
    # on the edge.
    scale = size * s / 32
    r_out = (12 + 0.75) * scale
    r_in = (12 - 0.75) * scale
    c = size * s / 2
    d.ellipse([c - r_out, c - r_out, c + r_out, c + r_out], fill=(0, 0, 0, 255))
    d.ellipse([c - r_in, c - r_in, c + r_in, c + r_in], fill=(255, 209, 0, 255))
    frames.append(big.resize((size, size), Image.LANCZOS))
frames[-1].save("public/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)], append_images=frames[:-1])
