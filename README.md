# Selekta Base Blowout Festival

Official website for **Selekta Base Blowout Festival** — Zimbabwe's premier motorsport, music and
car-lifestyle festival. *A Celebration of Car Culture, Music, and Lifestyle.*

> **Status: holding page.** The site currently ships a single "under construction" landing page —
> a full-screen YouTube background loop of the Blowout Festival documentary with construction-themed
> motion graphics on top. The full multi-section site (tickets, experience grid, sponsorship portal,
> exhibitor registration, gallery) is still to be built.

## Stack

- **React 19** + **TypeScript** + **Vite**
- Hand-written CSS (no framework) — tokens in `src/index.css`, layout/components in `src/App.css`
- Fonts: **Neuropol** (brand/display) + **Poppins** (body copy and contact bar), both self-hosted —
  no third-party font requests

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check and production build into dist/
npm run preview    # serve the production build
npm run lint       # oxlint
```

## Project structure

```
index.html                    document head, fonts, meta/OG tags
public/fonts/                 self-hosted webfonts (+ licence notes)
src/
  App.tsx                     holding-page composition
  App.css                     layout + component styles and animations
  index.css                   @font-face, design tokens, reset, global type
  data/event.ts               brand, contact, media and attraction constants
  components/
    YouTubeBackground.tsx     cover-scaled, chrome-free YouTube loop + poster fallback
    BrandMark.tsx             text-only wordmark lockup
    GearRings.tsx             rotating gear rings behind the headline
    SocialLinks.tsx           circular icon links (inline SVG, no icon library)
    Sparks.tsx                drifting ember particles
    Ticker.tsx                infinite marquee of festival attractions
    ContactBar.tsx            venue, office, phone and email strip
docs/BLOWOUT_BRIEF.md         full client business brief (source of truth for content)
```

## Fonts

Two self-hosted families, deliberately split:

| Token | Family | Used for |
|---|---|---|
| `--font-tech` | `'Ethnocentric' → 'Neuropol'` | Wordmark, headline, chips, status pill, stat figures, progress labels, ticker |
| `--font-ui` | `'Poppins'` | Description paragraph and the whole contact bar |

Poppins (SIL OFL 1.1, latin subset, weights 300/400/500) carries running copy because the techno
face is built for display, not paragraphs. Neuropol is **CC0 public domain** (Typodermic / Ray
Larabie), so it is free to embed commercially. Licences and sources:
[`public/fonts/README.md`](public/fonts/README.md).

The brand font requested was **Ethnocentric**. Its Typodermic Desktop Licence is free for logos
and static graphics but **explicitly excludes webfont embedding**, so it cannot legally be served
as a live webfont without an extra licence — and it isn't in Typodermic's CC0 set. Neuropol is the
closest license-clean match: same foundry, same designer, same genre. `'Ethnocentric'` sits first
in the stack, so:

1. Buy a webfont/embedding licence — [MyFonts](https://www.myfonts.com/collections/ethnocentric-font-typodermic)
   or [Font Bros](https://www.fontbros.com/families/ethnocentric).
2. Save the file as `public/fonts/ethnocentric.woff2`.
3. Done — it takes over automatically, no code change.

Until then the browser logs a harmless 404 for that file and falls back to Neuropol.

## Social links

Rendered as **circular icon links directly below the headline figures** (10 / 7,000+ / All day),
driven by the `SOCIALS` array in `src/data/event.ts`. Add or remove a platform there, and add a
matching glyph to `ICON_PATHS` in [`SocialLinks.tsx`](src/components/SocialLinks.tsx).

Icons are inlined SVG paths from [Simple Icons](https://simpleicons.org/) (CC0 1.0), so they add
no network requests and no icon-library dependency.

| Platform | Destination | Status |
|---|---|---|
| Instagram | `@blowout_festival_zimbabwe` | Handle supplied by the client |
| Facebook | `facebook.com/selektabase263` → "Selekta Base Worldwide" | Verified |
| X | `x.com/selektabase` → "Selekta Base (@selektabase)" | Verified |

The **YouTube channel is deliberately omitted** at the client's request. Each link is a 44×44px
touch target with an `aria-label` carrying the platform and handle.

## The background video

The hero loop is a YouTube embed, not a hosted video file, and it plays only the **0:03 → 1:12**
excerpt of the documentary.

`YouTubeBackground`:

- drives the player through the **YouTube IFrame API** rather than URL parameters, because
  `start`/`end` in an embed URL are honoured on the *first pass only* — after that playback runs
  straight past `end`. The component polls `getCurrentTime()` and seeks back to the segment start,
  which loops the excerpt reliably (verified over repeated cycles).
- cover-scales the iframe to any viewport (`100vw × 56.25vw` plus min-size guards) and applies
  `pointer-events: none` so YouTube's hover chrome and title bar never appear,
- **holds the poster frame until 7s after playback starts**, then fades the player in. YouTube
  paints its own title bar and a large centre play/pause button over the video for the first few
  seconds, and nothing inside a cross-origin iframe can be styled away — so the player stays
  transparent until that overlay has cleared. Measured clear time is 3–6s after playback begins;
  shortening `REVEAL_DELAY_MS` makes the pause button visible on the live site.
- is `aria-hidden` and removed from the tab order since it is purely decorative.

Swap the video or the excerpt without touching code by copying `.env.example` to `.env.local`:

```bash
VITE_YOUTUBE_VIDEO_ID=0sI0__vvU6I
VITE_YOUTUBE_START=3     # 0:03
VITE_YOUTUBE_END=72      # 1:12
```

If the IFrame API or the embed cannot load, the poster frame (`i.ytimg.com`) still fills the
background.

## Notes

- All content lives in `src/data/event.ts` — update it alongside `docs/BLOWOUT_BRIEF.md` when
  brand facts change.
- Decorative motion is CSS-only and disabled under `prefers-reduced-motion: reduce`.
- The holding page intentionally avoids announcing a date or ticket pricing; those are open
  questions with the client (see the brief, section 9).
