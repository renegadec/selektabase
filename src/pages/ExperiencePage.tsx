import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { EXPERIENCE_PILLARS } from '../data/experience'

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Experience"
        title="Everything happening on the day"
        intro="Three worlds running side by side, from gates open to the fireworks finale."
      />

      {EXPERIENCE_PILLARS.map((pillar, index) => (
        <Section
          key={pillar.id}
          id={pillar.id}
          eyebrow={pillar.eyebrow}
          title={pillar.title}
          intro={pillar.blurb}
          tinted={index % 2 === 1}
        >
          <div className="experience-grid">
            {pillar.items.map((item) => (
              <article className="experience-card" key={item.name}>
                <h3 className="experience-card__title">{item.name}</h3>
                <p className="experience-card__body">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>
      ))}

      <Section className="cta-band">
        <div className="cta-band__inner">
          <h2 className="cta-band__title">Plan your day</h2>
          <p className="cta-band__body">
            General Access, VIP and VVIP passes — register your interest and we’ll let you know the
            moment tickets open.
          </p>
          <div className="cta-row">
            <Link className="btn btn--primary" to="/tickets">
              See ticket options
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Getting there
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
