import EnquiryForm from '../components/EnquiryForm'
import type { FormField } from '../components/EnquiryForm'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import { CONTACT, EVENT } from '../data/event'

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`

const MAP_QUERY = encodeURIComponent('Borrowdale Racecourse, Harare, Zimbabwe')
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`

const CONTACT_FIELDS: readonly FormField[] = [
  { name: 'name', label: 'Your name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  {
    name: 'topic',
    label: 'What is this about?',
    type: 'select',
    required: true,
    options: [
      'General enquiry',
      'Tickets',
      'Sponsorship',
      'Exhibiting or vending',
      'Media & press',
      'Charity / foundation',
    ],
  },
  { name: 'message', label: 'Message', type: 'textarea', required: true, wide: true },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro={`${EVENT.organisers}.`}
      />

      <Section>
        <div className="contact-grid">
          <div className="contact-block">
            <h2 className="contact-block__title">Venue</h2>
            <p>{EVENT.venue}</p>
            <a className="link-arrow" href={MAP_LINK} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>

          <div className="contact-block">
            <h2 className="contact-block__title">Direct</h2>
            <ul>
              {CONTACT.phones.map((phone) => (
                <li key={phone}>
                  <a href={telHref(phone)}>{phone}</a>
                </li>
              ))}
              {CONTACT.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-block">
            <h2 className="contact-block__title">Office</h2>
            <p>{CONTACT.office}</p>
          </div>

          <div className="contact-block">
            <h2 className="contact-block__title">Follow</h2>
            <SocialLinks />
          </div>
        </div>
      </Section>

      <Section tinted>
        <div className="map-wrap">
          <iframe
            className="map"
            src={MAP_EMBED}
            title="Map showing Borrowdale Racecourse, Harare"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      <Section
        eyebrow="Message us"
        title="Send an enquiry"
        intro="Tell us what you need and the right person will get back to you."
      >
        <EnquiryForm
          id="contact-form"
          subject="Blowout Festival — website enquiry"
          fields={CONTACT_FIELDS}
          submitLabel="Send message"
        />
      </Section>
    </>
  )
}
