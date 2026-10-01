# AGENTS.md

Project: the official website for the **Selekta Base Blowout Festival** (Zimbabwe's premier
motorsport, music and car-lifestyle festival).

## Read this first

- **`docs/BLOWOUT_BRIEF.md`** — the client's full business brief: brand identity, vision,
  festival attractions, audience data, sponsorship tiers, exhibition packages, the intended
  8-section site architecture and all contact details. Treat it as the source of truth for
  content and tone.
- **`src/data/event.ts`** — the machine-readable subset of that brief that the app renders.
  Update it (and the brief) when brand facts change.

## Current state

Shipped: a temporary "under construction" holding page — full-screen YouTube background loop
(0:03 → 1:12 excerpt), construction-themed motion graphics (rotating gear rings, drifting embers,
ticker motion), a text-only wordmark, a flat build-progress meter, headline figures, a social icon
row and a contact bar. The full multi-section site has **not** been built yet.

## Conventions

- React 19 + TypeScript + Vite. No CSS framework — hand-written CSS in `src/index.css`
  (tokens/reset) and `src/App.css` (layout and components).
- Design language: dark base (`#07080a`), automotive red (`--red` / `--red-bright`), hazard amber
  (`--amber`), bold wide techno type. Use the existing CSS custom properties rather than new
  hard-coded colours.
- **Two typefaces, by design.** `--font-tech` (`'Ethnocentric' → 'Neuropol'`) carries the brand —
  wordmark, headline, chips, status pill, stats, progress labels, ticker. `--font-ui`
  (`'Poppins'`) is reserved for running copy (`.lede`) and the whole contact bar, where the wide
  techno face is unreadable at small/paragraph sizes. Don't spread Poppins past those areas, and
  don't put the techno face back on body copy. Both faces are self-hosted in `public/fonts/` —
  there are no third-party font requests. The techno faces are **expanded**, so keep their
  tracking tight — tighten further, never loosen. The wordmark is sized in `vw` to stay on one
  line; re-measure across 320–1920px before changing it. No `nowrap`, so a wider cut of the brand
  font wraps instead of overflowing.
- **Social profiles are data-driven** — `SOCIALS` in `src/data/event.ts`, rendered as circular icon
  links under the headline figures by `components/SocialLinks.tsx`. Adding a platform means adding
  a matching glyph to `ICON_PATHS` there. Don't hard-code links in components, and only ship URLs
  that actually resolve (the YouTube channel is intentionally excluded).
- The build-progress bar is a **flat solid fill, deliberately un-animated** — width is set inline
  from `BUILD_PROGRESS`. Don't reintroduce a gradient, shimmer or keyframe animation.
- The hero video is driven by the **YouTube IFrame API** and loops a segment (0:03 → 1:12).
  Embed URL `start`/`end` alone are **not** enough — they apply to the first pass only.
- Keep decorative motion CSS-only, always behind `prefers-reduced-motion` handling.
- Every component lives in `src/components/`; brand/event content comes from `src/data/event.ts`.

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # tsc -b && vite build
npm run lint     # oxlint
```
