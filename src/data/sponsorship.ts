/**
 * Sponsorship tiers and exhibition packages.
 * Content taken verbatim from the client brief (docs/BLOWOUT_BRIEF.md, section 5).
 */

export type SponsorTier = {
  id: string
  name: string
  investment: string
  note?: string
  featured?: boolean
  deliverables: string[]
}

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    id: 'diamond',
    name: 'Diamond Sponsor',
    investment: '$15,000',
    note: 'Exclusive — 1 slot only',
    featured: true,
    deliverables: [
      'Sole category exclusivity',
      'Primary logo branding across all print and digital collateral, website and social channels',
      'Venue domination: stage backdrops, perimeter track signage and prime exhibitor booths',
      'Logo branding on 3 event cars',
      'Rights to dress staff and spinners in branded apparel',
      '20 VIP passes with premium catering and bar service',
      'MC/DJ pre-performance shoutouts and dedicated wrap-up PR features',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    investment: '$10,000',
    deliverables: [
      'Prominent logo placement on digital and print collateral, and the website',
      'Oversized sponsor booth in a high-traffic zone',
      'Logo branding on 2 vehicles',
      'Dedicated social media campaign inclusions',
      '10 VIP passes with premium food and beverage service',
      'Pre-performance stage mentions and a wrap-up press release feature',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    investment: '$5,000',
    deliverables: [
      'Standard logo placement across promotional materials and the website',
      'Standard promotional exhibitor booth',
      'Logo branding on 1 vehicle',
      'General social media marketing mentions',
      '5 VIP passes with premium food and beverage service',
      'Wrap-up post-event digital coverage',
    ],
  },
]

export type BoothPackage = {
  id: string
  name: string
  price: string
  blurb: string
  points: string[]
}

export const BOOTH_PACKAGES: BoothPackage[] = [
  {
    id: 'premium',
    name: 'Premium Booth',
    price: '$2,500',
    blurb: 'A larger footprint in the highest-density spectator flow areas.',
    points: [
      'Maximum brand engagement',
      'Room for vehicle demos',
      'Direct product sampling',
    ],
  },
  {
    id: 'standard',
    name: 'Standard Booth',
    price: '$1,500',
    blurb: 'Prime-location 3×3m footprint for retail and activations.',
    points: ['Merchandise sales', 'Brand activations', 'Lead capture'],
  },
]
