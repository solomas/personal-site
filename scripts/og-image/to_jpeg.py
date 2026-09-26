# Converts the rendered social image to public/og.jpg at the highest JPEG
# quality that stays under 200 KB, and prints how far it drifts from the
# source. Usage, from the repo root: python3 scripts/og-image/to_jpeg.py og.png
import sys, io
import numpy as np
from PIL import Image
src = Image.open(sys.argv[1]).convert("RGB")
limit = 200 * 1024
for q in range(95, 40, -1):
    buf = io.BytesIO()
    src.save(buf, "JPEG", quality=q, optimize=True, progressive=True, subsampling=0 if q >= 90 else 2)
    if buf.tell() <= limit:
        break
open("public/og.jpg", "wb").write(buf.getvalue())
a = np.asarray(src).astype(float)
b = np.asarray(Image.open("public/og.jpg").convert("RGB")).astype(float)
mse = ((a - b) ** 2).mean()
print(f"quality {q}, {buf.tell()} bytes, {Image.open('public/og.jpg').size}, PSNR {10 * np.log10(255 ** 2 / mse):.1f} dB, max pixel difference {np.abs(a - b).max():.0f}")
