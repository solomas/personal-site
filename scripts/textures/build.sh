#!/usr/bin/env bash
# Rebuilds the texture bitmaps in public/textures/: the ink masks and ink
# grain of the shapes. Needs Google Chrome, Node 22 or later and Python 3
# with numpy and Pillow. The output is the same on every run.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$HERE/../../public/textures"
TMP="$(mktemp -d)"
python3 "$HERE/gen_masks.py" "$TMP"
node "$HERE/bake_masks.mjs" "$TMP" "$TMP"
python3 "$HERE/pack_masks.py" "$TMP" "$OUT"
python3 "$HERE/gen_grain.py" "$OUT"
rm -rf "$TMP"
