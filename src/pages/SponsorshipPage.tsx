import EnquiryForm from '../components/EnquiryForm'
import type { FormField } from '../components/EnquiryForm'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { EVENT, SPONSOR_DECK_URL } from '../data/event'
import { BOOTH_PACKAGES, SPONSOR_TIERS } from '../data/sponsorship'
import { SITE_STATS } from '../data/site'

const SPONSOR_FIELDS: readonly FormField[] = [
  { name: 'company', label: 'Company', type: 'text', required: true },
  { name: 'contact', label: 'Contact name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  {
    name: 'package',
    label: 'Package of interest',
    type: 'select',
    required: true,
    options: [
      ...SPONSOR_TIERS.map((tier) => `${tier.name} — ${tier.investment}`),
      ...BOOTH_PACKAGES.map((booth) => `${booth.name} — ${booth.price}`),
      'Custom activation',
    ],
  },
  {
    name: 'message',
    label: 'Tell us what you have in mind',
    type: 'textarea',
    wide: true,
    placeholder: 'Campaign goals, activation ideas, timings…',
  },
]

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate"
        title="Sponsorship & exhibition"
        intro={`Put your brand in front of ${EVENT.attendance} — on the track, on the stage and on the cars.`}
      >
        {SPONSOR_DECK_URL ? (
          <a className="btn btn--primary" href={SPONSOR_DECK_URL} download>
            Download the sponsorship deck
          </a>
        ) : (
          <p className="page-hero__note">
            Sponsorship deck available on request —{' '}
            <a href="#sponsor-enquiry">enquire below</a> and we’ll send it over.
          </p>
        )}
      </PageHero>

      <Section
        eyebrow="Packages"
        title="Three sponsorship tiers"
        intro="Every tier includes logo placement, exhibitor space and VIP passes — scaled to the level of venue domination you want."
      >
        <div className="pillar-grid">
          {SPONSOR_TIERS.map((tier) => (
            <article
              className={tier.featured ? 'card card--featured' : 'card'}
              key={tier.id}
            >
              {tier.note ? <p className="card__flag">{tier.note}</p> : null}
              <h3 className="card__title">{tier.name}</h3>
              <p className="price">
                <span className="price__amount">{tier.investment}</span>
              </p>
              <ul className="tick-list">
                {tier.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Exhibition"
        title="Booth packages"
        intro="For brands that want a physical presence on the day rather than a full sponsorship."
        tinted
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
        eyebrow="Audience"
        title="Who you’re reaching"
      >
        <ul className="stat-grid stat-grid--wide">
          {SITE_STATS.map((stat) => (
            <li className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="sponsor-enquiry"
        eyebrow="Enquire"
        title="Talk to us about partnering"
        intro="Tell us what you’re aiming for and we’ll come back with availability and a tailored proposal."
        tinted
      >
        <EnquiryForm
          id="sponsor-form"
          subject="Blowout Festival — sponsorship enquiry"
          fields={SPONSOR_FIELDS}
          submitLabel="Send sponsorship enquiry"
        />
      </Section>
    </>
  )
}
