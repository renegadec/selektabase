/**
 * Ticketing.
 *
 * Tier names come from the brief ("General Access, VIP and VVIP passes").
 * Prices and the confirmed inclusions are **not yet supplied by the client** —
 * any tier with `price: null` renders as "Announced soon" rather than showing a
 * broken or invented figure. Set the price (and add perks) here and the page
 * picks them up with no other changes.
 */

export type TicketTier = {
  id: string
  name: string
  /** null → renders "Announced soon". */
  price: string | null
  /** Optional gate price shown beside the advance price. */
  gatePrice?: string
  blurb: string
  perks: string[]
  featured?: boolean
}

export const TICKET_TIERS: TicketTier[] = [
  {
    id: 'general',
    name: 'General Access',
    price: null,
    blurb: 'Full-day entry to the motorsport arena, midway, food courts and main stage.',
    perks: [
      'All-day access to the action arena',
      'Carnival, midway and kids’ zone',
      'Food courts and beverage gardens',
      'Live concerts and DJ line-ups',
    ],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: null,
    blurb: 'Everything in General Access plus premium service and a dedicated viewing area.',
    featured: true,
    perks: [
      'Priority entry lane',
      'Premium food and beverage service',
      'Dedicated VIP viewing area',
      'Reserved main-stage standing',
    ],
  },
  {
    id: 'vvip',
    name: 'VVIP',
    price: null,
    blurb: 'The full hospitality package, including premium catering and bar service.',
    perks: [
      'Premium catering and bar service',
      'Best-positioned hospitality area',
      'Dedicated host for the day',
      'Merchandise pack',
    ],
  },
]

/** True while any tier still lacks a confirmed price. */
export const TICKETS_PENDING_PRICING = TICKET_TIERS.some((tier) => tier.price === null)
