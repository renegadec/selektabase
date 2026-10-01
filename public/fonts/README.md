# Fonts

Two families ship with the page. Both are self-hosted — there are no third-party font requests.

## Neuropol — brand / display (CC0 public domain)

`neuropol.woff2` — **Neuropol** by Raymond Larabie / Typodermic Fonts, released under
**CC0 1.0 Public Domain Dedication** ("no rights reserved"). Free to embed, modify and
redistribute, including commercially. See [`LICENSE-Neuropol.txt`](LICENSE-Neuropol.txt) and
<https://creativecommons.org/publicdomain/zero/1.0/>.

Source: Typodermic's *public domain fonts* collection —
<https://typodermicfonts.com/public-domain/> (webfont package
`typodermic-public-domain-webfonts-2024-12.zip`).

Used for: the wordmark, headline, chips, status pill, stat figures, progress labels and ticker.

## Poppins — body copy and contact block (SIL OFL 1.1)

`poppins-latin-{300,400,500}.woff2` — **Poppins** by the Indian Type Foundry, licensed under the
**SIL Open Font License 1.1**. See [`LICENSE-Poppins.txt`](LICENSE-Poppins.txt) and
<https://openfontlicense.org/>.

Source: Google Fonts, latin subset only (`v24`), downloaded from `fonts.gstatic.com`.

Used for: the description paragraph (`300`), contact values (`400`) and contact labels (`500`).
Kept deliberately separate from the brand face because Poppins is far more readable at paragraph
size, and the brief reserves the techno face for display.

## Optional upgrade: Ethnocentric

The client asked for **Ethnocentric**. Important licensing detail:

- Ethnocentric **Regular** is free under the Typodermic *Desktop License* for logos, print,
  static graphics and rendered video.
- That licence **explicitly excludes font embedding** — "Webfonts, apps, games, software,
  devices, servers, SaaS … require another license or written permission."
  See <https://typodermicfonts.com/license/> and the
  [DaFont listing](https://www.dafont.com/ethnocentric.font).
- It is **not** in Typodermic's CC0 public-domain collection.

### To switch to Ethnocentric

1. Buy a **webfont / embedding licence** — [MyFonts](https://www.myfonts.com/collections/ethnocentric-font-typodermic)
   or [Font Bros](https://www.fontbros.com/families/ethnocentric).
2. Save the webfont file here as **`ethnocentric.woff2`**.
3. That's it — no code change. `@font-face` for `'Ethnocentric'` is already declared in
   `src/index.css` and sits first in the brand stack, so it takes over automatically.

Until the file exists, the browser logs a harmless 404 for `/fonts/ethnocentric.woff2` and
falls back to Neuropol, the closest license-clean match (same designer, same techno genre).
