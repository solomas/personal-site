# Keeps only the alpha of each rendered mask, in 32 levels, as black with
# alpha. The mask only reads alpha.
import sys
import numpy as np
from PIL import Image
src, out = sys.argv[1], sys.argv[2]
for k in "abcd":
    a = np.asarray(Image.open(f"{src}/raw-{k}.png").convert("RGBA"))[..., 3].astype(float)
    q = (np.round(a / 255 * 31) * 255 / 31).astype(np.uint8)
    rgba = np.zeros(q.shape + (4,), dtype=np.uint8)
    rgba[..., 3] = q
    Image.fromarray(rgba, "RGBA").save(f"{out}/shape-{k}.png", optimize=True)
    print(k, q.shape, round(q.mean() / 255, 3))
