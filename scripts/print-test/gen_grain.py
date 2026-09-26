# Bakes the grain inside the ink as two seamless PNG tiles in the ground
# colours, white for day and black for night, with alpha 1 - g, where g is
# the ink density between about 0.5 and 1. Laid over the shape colour they
# leave ink density g. White noise, softened a
# little with a wrapped blur so the tile repeats without a seam. The tile has
# 320 pixels and shows at 160 CSS pixels, so it stays sharp at 2x. Values chosen
# by eye.
import sys
import numpy as np
from PIL import Image
out = sys.argv[1]
N = 320
rng = np.random.default_rng(7)
noise = rng.random((N, N))
# Wrapped gaussian blur through the FFT, sigma 0.7 px.
f = np.fft.fftfreq(N)
fx, fy = np.meshgrid(f, f)
sigma = 1.2
kernel = np.exp(-2 * (np.pi ** 2) * (sigma ** 2) * (fx ** 2 + fy ** 2))
soft = np.real(np.fft.ifft2(np.fft.fft2(noise) * kernel))
soft = (soft - soft.mean()) / soft.std()
alpha = np.clip(0.8 + 0.16 * soft, 0.5, 1.0)
for name, v in (("grain-day.png", 255), ("grain-night.png", 0)):
    rgba = np.zeros((N, N, 4), dtype=np.uint8)
    rgba[..., :3] = v
    # Sixteen alpha levels are enough for grain and keep the file small.
    rgba[..., 3] = (np.round((1 - alpha) * 15) * 17).astype(np.uint8)
    Image.fromarray(rgba, "RGBA").save(f"{out}/{name}", optimize=True)
print("mean density", round(alpha.mean(), 3), "min", round(alpha.min(), 3))
