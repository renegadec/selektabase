import { CONTACT } from './event'

/**
 * Where enquiry forms POST.
 *
 * `null` means no backend is wired yet, so forms fall back to opening the
 * user's mail client with the message pre-filled — that works today with no
 * infrastructure. Set this to a form endpoint (Formspree, Web3Forms, your own
 * API, …) and every form starts POSTing JSON to it instead.
 */
export const FORM_ENDPOINT: string | null = null

/** Fallback recipient for mailto submissions. */
export const FORM_RECIPIENT = CONTACT.emails[0]

/** Rough festival facts re-used across pages. */
export const SITE_STATS = [
  { value: '10 yrs', label: 'Running the Blowout' },
  { value: '7,000+', label: 'Attendees per edition' },
  { value: '80 / 20', label: 'Local / regional split' },
  { value: 'Ages 10–65', label: 'Multi-generational crowd' },
] as const
