# 2026-09-26c: Last print changes, PhD recon, merge into main

Branch: `print-test` for the changes, then `main` for the merge.

## What changed

- 1264bc5 on `print-test`: the day paper tile drops to 85 percent of its base strength, strongest pixel alpha from 0.187 to 0.161. The night tile is byte identical. InScience reads "The 2025 edition ran across", nothing else in that file changed, and `docs/copy/site-copy.md` follows it. The copy doc also names og.jpg and no longer calls the hero phrase bold, which phase 8 removed. `public/og.png` became `public/og.jpg`, 196,624 bytes at JPEG quality 93 with full colour resolution, 41.2 dB from the PNG, made by the new `scripts/og-image/to_jpeg.py`. The Open Graph and Twitter tags on all pages point to it, checked in every built page.
- 7f1b5c3 on `main`: merge commit of `print-test`, so `git revert -m 1 7f1b5c3` undoes phase 8 in one step. The branches `print-test` and `redesign` are kept.

## Contrast in day after the lighter paper

Worst case with the paper at its strongest pixel and up to three overlapping shapes: ink on the bare ground 11.26, on glass 15.83, on sheets 21.00. Muted on glass 5.28, on sheets 7.00. Ink on the yellow stroke and the selection 14.37. All pass AA.

## Live checks on tomasvangorp.com, 2026-09-26

- The home page returns 200 and its CSS loads the paper and ink bitmaps, all eight return 200. Screenshots show the paper and the ink shapes in both themes.
- The glass blurs the background: on the contact page the pixel spread inside the glass is 0.00 in day and 0.13 in night, against 4.80 and 3.96 on bare paper.
- /work/inscience/ reads "The 2025 edition ran across".
- /og.jpg returns 200, image/jpeg, 196,624 bytes, and the pages name it in og:image.
- An unknown address returns 404. sitemap.xml returns 200.
- /projects/amsterdam-property-model/ and the address without the slash return 301 to /projects/loelens/.
- /og.png still returned 200 from the Cloudflare cache with the old 97,400 byte file, cached for up to four hours. An uncached request returns 404.

## PhD recon, read only

Since the recon of 25 September nothing changed. `~/code/phd` has no commit after dd88335, locally or on origin, no other branch moved and no file changed after that commit. `~/code/conversion-tracker` has no commit after 614f2cc of 21 September and only `.DS_Store` files changed. In Drive, `PhD/` has no file changed or added after 25 September 17:01. The files of that day are the state mirror and the notebook pack of the week close at dd88335, and the EJ Fused deck of 16:45, which differs from the site copy only by the preconnect hints the site removed in 40f85a2. No private file was opened.

## Open

- Check the texture, hover, focus and first paint on a real phone and a retina screen.
