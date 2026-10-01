import EnquiryForm from '../components/EnquiryForm'
import type { FormField } from '../components/EnquiryForm'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { NEXT_EDITION } from '../data/event'
import { TICKET_TIERS, TICKETS_PENDING_PRICING } from '../data/tickets'

const TICKET_FIELDS: readonly FormField[] = [
  { name: 'name', label: 'Full name', type: 'text', required: true, placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+263 …' },
  {
    name: 'tier',
    label: 'Which pass?',
    type: 'select',
    required: true,
    options: [...TICKET_TIERS.map((tier) => tier.name), 'Not sure yet'],
  },
  {
    name: 'quantity',
    label: 'How many?',
    type: 'select',
    options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'],
  },
  {
    name: 'message',
    label: 'Anything else?',
    type: 'textarea',
    wide: true,
    placeholder: 'Accessibility needs, group booking, questions…',
  },
]

export default function TicketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tickets"
        title="Register your interest"
        intro={`${NEXT_EDITION.dateLabel ?? 'Date to be announced'} · ${NEXT_EDITION.venue}`}
      />

      <Section
        eyebrow="Passes"
        title="Three ways in"
        intro={
          TICKETS_PENDING_PRICING
            ? 'Final pricing is being confirmed with the promoters — register below and you’ll be first to know when sales open.'
            : 'Prices are per person. Children under 12 enter free with a paying adult.'
        }
      >
        <div className="pillar-grid">
          {TICKET_TIERS.map((tier) => (
            <article
              className={tier.featured ? 'card card--featured' : 'card'}
              key={tier.id}
            >
              {tier.featured ? <p className="card__flag">Most popular</p> : null}
              <h3 className="card__title">{tier.name}</h3>
              <p className="price">
                <span className="price__amount">{tier.price ?? 'Announced soon'}</span>
              </p>
              <p className="card__body">{tier.blurb}</p>
              <ul className="tick-list">
                {tier.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Enquire"
        title="Get on the list"
        intro="No payment is taken now. We’ll contact you with confirmed pricing and a booking link as soon as tickets open."
        tinted
      >
        <EnquiryForm
          id="ticket-enquiry"
          subject="Blowout Festival — ticket enquiry"
          fields={TICKET_FIELDS}
          submitLabel="Register interest"
          note="We’ll only use your details to contact you about Blowout Festival tickets."
        />
      </Section>
    </>
  )
}
