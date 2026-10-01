import EnquiryForm from '../components/EnquiryForm'
import type { FormField } from '../components/EnquiryForm'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { EVENT } from '../data/event'
import { BOOTH_PACKAGES } from '../data/sponsorship'

const VENDOR_FIELDS: readonly FormField[] = [
  { name: 'business', label: 'Business / stall name', type: 'text', required: true },
  { name: 'contact', label: 'Contact name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  {
    name: 'category',
    label: 'What are you selling?',
    type: 'select',
    required: true,
    options: [
      'Food truck / concessions',
      'Braai / grill station',
      'Beverages / cocktail bar',
      'Artisan & craft stalls',
      'Apparel & merchandise',
      'Automotive parts & accessories',
      'Corporate activation',
      'Other',
    ],
  },
  {
    name: 'space',
    label: 'Space required',
    type: 'select',
    required: true,
    options: [
      ...BOOTH_PACKAGES.map((booth) => `${booth.name} — ${booth.price}`),
      'Food truck pitch',
      'Not sure yet',
    ],
  },
  {
    name: 'requirements',
    label: 'Power, water or other requirements',
    type: 'textarea',
    wide: true,
    placeholder: 'e.g. 2× 16A power points, water access, gas storage…',
  },
]

export default function ExhibitorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Exhibitors"
        title="Trade with the Blowout crowd"
        intro={`Food trucks, artisan stalls and corporate activations — ${EVENT.attendance}, all day, at ${EVENT.venue.split(',')[0]}.`}
      />

      <Section
        eyebrow="Spaces"
        title="Two booth sizes"
        intro="Both sit in the spectator flow. Premium gets the highest-density positions and room for vehicle demos."
      >
        <div className="pillar-grid pillar-grid--two">
          {BOOTH_PACKAGES.map((booth) => (
            <article className="card" key={booth.id}>
              <h3 className="card__title">{booth.name}</h3>
              <p className="price">
                <span className="price__amount">{booth.price}</span>
              </p>
              <p className="card__body">{booth.blurb}</p>
              <ul className="tag-list">
                {booth.points.map((point) => (
                  <li className="tag" key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Register"
        title="Book your space"
        intro="Send us your details and we’ll confirm availability, positioning and payment."
        tinted
      >
        <EnquiryForm
          id="vendor-form"
          subject="Blowout Festival — exhibitor / vendor registration"
          fields={VENDOR_FIELDS}
          submitLabel="Submit registration"
          note="Submitting this form does not confirm a space — we’ll be in touch to complete the booking."
        />
      </Section>
    </>
  )
}
