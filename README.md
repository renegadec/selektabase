# Selekta Base Blowout Festival

Official website for **Selekta Base Blowout Festival** — Zimbabwe's premier motorsport, music and
car-lifestyle festival. *A Celebration of Car Culture, Music, and Lifestyle.*

## Stack

- **React 19** + **TypeScript** + **Vite**, routed with **React Router 7**
- Hand-written CSS (no framework): tokens in `src/index.css`, hero/video in `src/App.css`,
  site chrome and UI primitives in `src/styles/site.css`
- Fonts self-hosted, no third-party font requests: **Neuropol** (brand/display, CC0) and
  **Poppins** (body copy + contact, OFL 1.1)

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # tsc -b && vite build  → dist/
npm run preview    # serve the production build
npm run lint       # oxlint
```

## Routes

| Route | Page | Contents |
|---|---|---|
| `/` | Home | Video hero, CTAs, stats, three pillars, legacy teaser, sponsorship teaser |
| `/about` | About / The Legacy | The Selekta Base story, impact pillars, audience data |
| `/experience` | The Experience | Three pillars with their full attraction lists |
| `/tickets` | Tickets | General Access / VIP / VVIP + interest form |
| `/sponsorship` | Sponsorship | Diamond / Gold / Silver tiers, booth packages, enquiry form |
| `/exhibitors` | Exhibitors | Booth packages + vendor registration form |
| `/gallery` | Gallery | Embedded aftermovie + photo grid |
| `/contact` | Contact | Venue, office, direct contacts, socials, map, message form |
| `*` | 404 | Recovery links |

## Project structure

```
public/
  fonts/                      self-hosted webfonts + licences
  _redirects                  SPA fallback for Netlify / Cloudflare Pages
src/
  App.tsx                     router
  App.css                     hero, video background, wordmark, socials
  index.css                   @font-face, design tokens, reset
  styles/site.css             header, nav, footer, sections, cards, forms
  layouts/SiteLayout.tsx      shared chrome (header + outlet + footer)
  pages/                      one file per route
  components/
    SiteHeader.tsx            sticky nav + mobile drawer
    SiteFooter.tsx            explore / contact / office columns
    PageHero.tsx              shared inner-page masthead
    Section.tsx               shared section wrapper
    EnquiryForm.tsx           reusable form (see Forms below)
    SocialLinks.tsx           circular icon links
    YouTubeBackground.tsx     hero video background
  data/
    event.ts                  brand, contact, media, edition
    navigation.ts             nav links and CTAs
    experience.ts             experience pillars + impact pillars
    sponsorship.ts            tiers + booth packages
    tickets.ts                ticket tiers
    gallery.ts                gallery media
    site.ts                   form endpoint, shared stats
docs/BLOWOUT_BRIEF.md         full client business brief (source of truth for content)
```

## Content still needed from the client

The site renders cleanly without these — each has a deliberate "pending" state rather than an
invented value — but they should be filled in before launch:

| What | Where to set it | Current state |
|---|---|---|
| Event dates | `NEXT_EDITION.dateLabel` / `doorsLabel` in `src/data/event.ts` | "Date to be announced" |
| Ticket pricing | `price` on each tier in `src/data/tickets.ts` | "Announced soon" |
| Gallery photos | `GALLERY_PHOTOS` in `src/data/gallery.ts` (add a `src`) | Labelled placeholder tiles |
| Sponsorship deck PDF | Drop the PDF in `public/` and set `SPONSOR_DECK_URL` in `src/data/event.ts` | "Available on request" |
| Instagram account | Confirm `@blowout_festival_zimbabwe` exists | Unverified (see Social links) |

## Forms

Every form goes through **`src/components/EnquiryForm.tsx`**, which has two modes:

- **Default (no backend):** composes the answers into a pre-filled email draft addressed to
  `FORM_RECIPIENT`. Works today with zero infrastructure.
- **Wired up:** set `FORM_ENDPOINT` in `src/data/site.ts` to a form service (Formspree, Web3Forms,
  your own API) and every form POSTs JSON to it instead, reporting success inline.

## Deployment

The app is a single-page app, so the host must fall back to `index.html` for unknown paths or deep
links will 404. A `public/_redirects` file covering Netlify and Cloudflare Pages is included.

- **Vercel:** add `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }` to `vercel.json`
- **nginx:** `try_files $uri $uri/ /index.html;`
- **Apache:** a `.htaccess` rewrite to `index.html`

## Notes

- One typeface carries the brand (`--font-tech`) and Poppins handles running copy and the contact
  area; see [`public/fonts/README.md`](public/fonts/README.md) for the Ethnocentric licensing
  situation and the zero-code upgrade path.
- Social links are data-driven from `SOCIALS` in `src/data/event.ts`.
- Decorative motion is CSS-only and disabled under `prefers-reduced-motion: reduce`.
