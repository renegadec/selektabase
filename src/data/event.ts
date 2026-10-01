/**
 * Single source of truth for Selekta Base Blowout Festival brand facts.
 *
 * The full business brief (sponsorship tiers, exhibition packages, audience
 * data, future site architecture) lives in `docs/BLOWOUT_BRIEF.md`.
 */

export const EVENT = {
  /** Public-facing brand names. */
  brand: 'Selekta Base',
  name: 'Selekta Base Blowout Festival',
  altNames: ['Blowout Next Level', 'Blowout Burnouts'],
  tagline: 'A Celebration of Car Culture, Music, and Lifestyle',
  edition: '10th Anniversary Edition',
  strapline: 'Zimbabwe’s premier motorsport lifestyle experience',
  organisers: 'Extreme Entertainment in partnership with Base Solutions Group',
  venue: 'Borrowdale Racecourse, Liberation Legacy Way, Harare, Zimbabwe',
  city: 'Harare · Zimbabwe',
  attendance: '7,000+ attendees per edition',
  founder: 'Selekta Base (Arnold Chiguta)',
} as const

export const CONTACT = {
  phones: ['+263 771 119 747', '+263 772 953 457'],
  emails: ['admin@basesolutions.co.zw', 'arnoldchig@gmail.com'],
  office: 'Office No. 12, 1st Floor, G.T Baines Building, 55 King George Road, Avondale, Harare',
} as const

/**
 * Social profiles rendered as icon links beneath the headline figures.
 *
 * `icon` selects a glyph from `SOCIALS_ICONS` in `components/SocialLinks.tsx`.
 * `url` values are real, checked destinations:
 *  - Instagram  — handle supplied by the client in the brand brief
 *  - Facebook   — verified: facebook.com/selektabase263 resolves to "Selekta Base Worldwide"
 *  - X          — verified: x.com/selektabase resolves to "Selekta Base (@selektabase)"
 *
 * The YouTube channel is deliberately omitted (client request). Add platforms
 * here and they render automatically, provided a matching icon exists.
 */
export const SOCIALS = [
  {
    label: 'Instagram',
    handle: '@blowout_festival_zimbabwe',
    icon: 'instagram',
    url: 'https://www.instagram.com/blowout_festival_zimbabwe/',
  },
  {
    label: 'Facebook',
    handle: 'Selekta Base Worldwide',
    icon: 'facebook',
    url: 'https://www.facebook.com/selektabase263/',
  },
  {
    label: 'X',
    handle: '@selektabase',
    icon: 'x',
    url: 'https://x.com/selektabase',
  },
] as const

export const MEDIA = {
  /** YouTube id for the "2025 In Retrospect" documentary used as the hero loop. */
  videoId: import.meta.env.VITE_YOUTUBE_VIDEO_ID ?? '0sI0__vvU6I',
  videoTitle:
    'Selekta Base Blowout Festival (Burnouts) 2025 In Retrospect Documentary Episode 3 — 10th Anniversary',
  poster: `https://i.ytimg.com/vi/${import.meta.env.VITE_YOUTUBE_VIDEO_ID ?? '0sI0__vvU6I'}/maxresdefault.jpg`,
  /**
   * The hero loop plays only this excerpt: 0:03 → 1:12.
   * YouTube honours `start`/`end` on the first pass only, so the component
   * enforces the loop through the IFrame API. See `YouTubeBackground.tsx`.
   */
  segmentStart: envSeconds(import.meta.env.VITE_YOUTUBE_START, 3),
  segmentEnd: envSeconds(import.meta.env.VITE_YOUTUBE_END, 72),
} as const

/** Falls back when the env var is missing or not a non-negative number. */
function envSeconds(value: string | undefined, fallback: number): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback
}

/** What the festival will feature once the full site is live. */
export const ATTRACTIONS = [
  'Driftkhana',
  'Burnouts',
  'Biker Showcase',
  'Static Car Displays',
  'Sound-off Setups',
  'Live Concerts',
  'DJ Line-ups',
  'Mini Circus',
  "Kids' Zone",
  'Food Courts',
  'Art & Craft Village',
  'Fireworks Finale',
] as const

/** Rough build progress shown on the holding page. */
export const BUILD_PROGRESS = 34

export const NAV_NOTES = 'Full site launching soon'
