# AGENTS.md

Project: the official website for the **Selekta Base Blowout Festival** (Zimbabwe's premier
motorsport, music and car-lifestyle festival).

## Read this first

- **`docs/BLOWOUT_BRIEF.md`** — the client's full business brief: brand identity, vision,
  festival attractions, audience data, sponsorship tiers, exhibition packages, the intended site
  architecture and all contact details. Treat it as the source of truth for content and tone.
- **`src/data/`** — the machine-readable content the app renders. Update the data file, not the
  page component, when content changes.

## Current state

A routed multi-page site (React Router 7) covering all eight sections of the brief. Every page is
built and verified; what remains is **content the client has not supplied yet** — dates, ticket
prices, gallery photos, the sponsorship deck PDF. Each renders a deliberate pending state (see
"Never invent content" below). See the README table for exactly where each value goes.

## Architecture

- React 19 + TypeScript + Vite + React Router 7. No CSS framework.
- `src/App.tsx` is the router. Routes: `/`, `/about`, `/experience`, `/tickets`, `/sponsorship`,
  `/exhibitors`, `/gallery`, `/contact`, plus a `*` 404. All routes render inside
  `layouts/SiteLayout.tsx` (header + `<Outlet/>` + footer).
- One file per route in `src/pages/`. Shared primitives in `src/components/`
  (`PageHero`, `Section`, `EnquiryForm`, …). Content in `src/data/`.
- CSS is split by role: `src/index.css` (fonts, tokens, reset) · `src/App.css` (hero, video
  background, wordmark, socials) · `src/styles/site.css` (header, nav, footer, sections, cards,
  forms). Use the existing custom properties rather than new hard-coded colours.

## Never invent content

The client's dates, prices and assets are not all supplied. **Do not guess them.** The established
pattern is a nullable field plus a graceful pending state:

```ts
NEXT_EDITION.dateLabel: string | null   // null → "Date to be announced"
TICKET_TIERS[n].price:  string | null   // null → "Announced soon"
GALLERY_PHOTOS[n].src:  string | null   // null → labelled placeholder tile
SPONSOR_DECK_URL:       string | null   // null → "available on request"
```

Keep this pattern for any new content gap.

## Typography

**Two typefaces, by design.** `--font-tech` (`'Ethnocentric' → 'Neuropol'`) carries the brand —
headings, wordmark, nav, eyebrow labels, stat figures, ticker. `--font-ui` (`'Poppins'`) is
reserved for running copy and the contact area, where the wide techno face is unreadable at
paragraph size. Don't spread Poppins past those areas, and don't put the techno face back on body
copy. Both are self-hosted in `public/fonts/` — there are no third-party font requests. The techno
faces are **expanded**, so keep tracking tight. When sizing the home wordmark (which is `vw`-based
to stay on one line), re-measure across 320–1920px before changing it.

## Hero video

- Driven by the **YouTube IFrame API**, looping a segment (0:03 → 1:12). Embed URL `start`/`end`
  alone are **not** enough — they apply to the first pass only.
- The player stays at `opacity: 0` until **7s after the first `PLAYING` event**
  (`REVEAL_DELAY_MS`). This is deliberate: YouTube paints its own title bar and a large centre
  play/pause button over the video for the first few seconds, and nothing inside a cross-origin
  iframe can be styled away. Holding the poster frame until that overlay clears is the only
  reliable way to hide it. **Do not shorten this delay.**

## Conventions

- **Social profiles are data-driven** — `SOCIALS` in `src/data/event.ts`, rendered by
  `components/SocialLinks.tsx`. Adding a platform means adding a matching glyph to `ICON_PATHS`
  there. Only ship URLs that actually resolve (the YouTube channel is intentionally excluded).
- **Forms** all go through `components/EnquiryForm.tsx`. With `FORM_ENDPOINT === null` they fall
  back to a pre-filled `mailto:`; set the endpoint in `src/data/site.ts` to POST JSON instead.
- `public/_redirects` provides the SPA fallback. **Any new host needs the same rewrite** or deep
  links will 404.
- Keep decorative motion CSS-only and behind `prefers-reduced-motion`.

## Verification

Do not trust a screenshot alone, and do not trust a vision model's layout critique — it has
hallucinated both overflow and broken navigation that measurement disproved. Check for real:

```js
document.documentElement.scrollWidth > document.documentElement.clientWidth  // horizontal overflow
```

Measure across 320 / 390 / 768 / 1024 / 1440 / 1920, confirm no console errors on every route, and
exercise interactive pieces (mobile drawer, forms) with Playwright before calling work done.

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # tsc -b && vite build
npm run lint     # oxlint
```
