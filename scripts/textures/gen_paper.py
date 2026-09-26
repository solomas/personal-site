# Bakes the paper grain of the ground as two seamless PNG tiles: black specks
# with alpha for day, to lie on white, and white specks with alpha for night,
# to lie on black. Uncoated paper, not screen noise: a very fine, even tooth,
# short thin fibres in every direction and a faint cloudiness. Finer and more
# even than the ink grain. The tile has 256 pixels and shows at 128 CSS
# pixels, so it stays sharp at 2x. Every run gives the same tiles. Values
# chosen by eye.
import sys
import numpy as np
from PIL import Image, ImageDraw
out = sys.argv[1]
N = 256
rng = np.random.default_rng(19)
f = np.fft.fftfreq(N)
fx, fy = np.meshgrid(f, f)

def wrapped_blur(a, sigma):
    k = np.exp(-2 * (np.pi ** 2) * (sigma ** 2) * (fx ** 2 + fy ** 2))
    return np.real(np.fft.ifft2(np.fft.fft2(a) * k))

def norm(a):
    return (a - a.mean()) / a.std()

tooth = norm(wrapped_blur(rng.random((N, N)), 0.55))
cloud = norm(wrapped_blur(rng.random((N, N)), 7.0))

# Fibres, drawn four times larger and scaled down for soft edges. Each fibre
# is drawn at the nine wrapped offsets, so the tile has no seam.
S = 4
canvas = Image.new("L", (N * S, N * S), 0)
draw = ImageDraw.Draw(canvas)
for _ in range(200):
    x, y = rng.random(2) * N * S
    length = rng.uniform(5, 26) * S
    angle = rng.uniform(0, np.pi)
    bend = rng.uniform(-0.35, 0.35)
    shade = int(rng.uniform(90, 255))
    pts = []
    for t in np.linspace(0, 1, 8):
        a = angle + bend * (t - 0.5)
        pts.append((x + np.cos(a) * length * (t - 0.5), y + np.sin(a) * length * (t - 0.5)))
    for dx in (-N * S, 0, N * S):
        for dy in (-N * S, 0, N * S):
            draw.line([(px + dx, py + dy) for px, py in pts], fill=shade, width=S)
fibres = np.asarray(canvas.resize((N, N), Image.LANCZOS)).astype(float) / 255

alpha = 0.045 + 0.028 * tooth + 0.006 * cloud + 0.08 * fibres
alpha = np.clip(alpha, 0, 0.2)
# Night uses 70 percent of the day strength, because light specks on black
# read stronger than dark specks on white.
for name, v, k in (("paper-day.png", 0, 1.0), ("paper-night.png", 255, 0.7)):
    rgba = np.zeros((N, N, 4), dtype=np.uint8)
    rgba[..., :3] = v
    rgba[..., 3] = np.round(alpha * k * 255).astype(np.uint8)
    Image.fromarray(rgba, "RGBA").save(f"{out}/{name}", optimize=True)
print("paper alpha mean", round(alpha.mean(), 3), "p99", round(np.percentile(alpha, 99), 3), "max", round(alpha.max(), 3))
