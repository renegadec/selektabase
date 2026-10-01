/** Primary site navigation. Order drives both the header and the footer. */
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'The Experience', to: '/experience' },
  { label: 'Tickets', to: '/tickets' },
  { label: 'Sponsorship', to: '/sponsorship' },
  { label: 'Exhibitors', to: '/exhibitors' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const

/** The two calls to action that appear in the header and hero. */
export const PRIMARY_CTA = { label: 'Get Tickets', to: '/tickets' } as const
export const SECONDARY_CTA = { label: 'Partner With Us', to: '/sponsorship' } as const
