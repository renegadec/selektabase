/**
 * The three experience pillars, each with its constituent attractions.
 * Content taken from the client brief (docs/BLOWOUT_BRIEF.md, section 3).
 */

export type ExperiencePillar = {
  id: string
  eyebrow: string
  title: string
  blurb: string
  items: { name: string; detail: string }[]
}

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: 'action',
    eyebrow: 'Pillar 01',
    title: 'Motorsport & Action',
    blurb:
      'High-intensity precision driving at the heart of the festival — sanctioned, stewarded and enclosed.',
    items: [
      {
        name: 'Driftkhana & Burnouts',
        detail:
          'Tire-shredding donuts and drift battles featuring top regional and national car spinners.',
      },
      {
        name: 'Static Car Displays',
        detail:
          'Stance culture, custom engine builds, classic restorations and audio sound-off setups.',
      },
      {
        name: 'Biker Showcase',
        detail: 'Stunt riding, bike exhibitions and motorcycle convoys.',
      },
    ],
  },
  {
    id: 'music',
    eyebrow: 'Pillar 02',
    title: 'Music & Nightlife',
    blurb: 'The sun goes down and the main stage takes over, right through to the finale.',
    items: [
      {
        name: 'Live Concerts',
        detail: 'Performances by leading Zimbabwean and regional music artists.',
      },
      {
        name: 'DJ Line-ups',
        detail: 'Top-tier DJ line-ups curated by Selekta Base with guest entertainers.',
      },
      {
        name: 'MC & Crowd',
        detail: 'Master of Ceremonies hype, crowd interaction and contests all day.',
      },
      {
        name: 'Fireworks Finale',
        detail: 'A grand finale fireworks display closing the night.',
      },
    ],
  },
  {
    id: 'family',
    eyebrow: 'Pillar 03',
    title: 'Family & Lifestyle',
    blurb: 'A genuine all-day midway, built so the whole family can stay for the whole event.',
    items: [
      {
        name: 'Carnival & Mini Circus',
        detail: 'Midway games, interactive contests and walk-around performers.',
      },
      {
        name: "Kids' Zone",
        detail: 'Bouncing castles, inflatables and supervised children’s games.',
      },
      {
        name: 'Food & Concessions',
        detail:
          'Open-air food courts, beverage gardens, braai stations and cocktail bars.',
      },
      {
        name: 'Art & Craft Village',
        detail: 'Local artisan pop-up stalls and apparel vendors.',
      },
    ],
  },
]

/** Impact pillars from the brief — used on the About page. */
export const IMPACT_PILLARS = [
  {
    title: 'Regional motorsport hub',
    detail:
      'Hosting regional driftkhana and burnout competitions that attract premier drivers from South Africa, Botswana and Eswatini alongside top Zimbabwean talent.',
  },
  {
    title: 'Tourism promotion',
    detail:
      'Driving domestic and cross-border sports tourism into Harare, with roughly a fifth of every crowd arriving from outside Zimbabwe.',
  },
  {
    title: 'Youth empowerment',
    detail:
      'Transitioning street-level burnouts into a regulated, enclosed and professionally stewarded environment — channelling passion into mechanics, driving skill and teamwork.',
  },
  {
    title: 'Philanthropy',
    detail:
      'The festival frequently anchors charity campaigns through the Selekta Base Foundation, supporting vulnerable communities at year-end editions.',
  },
] as const
