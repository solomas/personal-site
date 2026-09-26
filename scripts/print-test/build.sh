#!/usr/bin/env bash
# Rebuilds the print test bitmaps in public/print/. Needs Google Chrome,
# Node 22 or later and Python 3 with numpy and Pillow. Branch print-test only.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$HERE/../../public/print"
TMP="$(mktemp -d)"
python3 "$HERE/gen_masks.py" "$TMP"
node "$HERE/bake_masks.mjs" "$TMP" "$TMP"
python3 "$HERE/pack_masks.py" "$TMP" "$OUT"
python3 "$HERE/gen_grain.py" "$OUT"
rm -rf "$TMP"
