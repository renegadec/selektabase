import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { EVENT } from '../data/event'
import { IMPACT_PILLARS } from '../data/experience'
import { SITE_STATS } from '../data/site'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The legacy"
        intro="How Selekta Base turned grassroots car spinning into Zimbabwe’s premier motorsport lifestyle festival."
      />

      <Section>
        <div className="prose">
          <p className="prose__lead">
            {EVENT.founder} is an established Zimbabwean event DJ, entrepreneur and motorsport
            promoter. Over the last decade he has transitioned grassroots car spinning into the
            country’s premier, safest and most popular mainstream automotive festival.
          </p>
          <p>
            The Blowout Festival is the result: Zimbabwe’s premier motorsport lifestyle
            experience, blending high-octane car spinning, drifting and driftkhana with a
            family-friendly carnival, live musical concerts and corporate exhibitions.
          </p>
          <p>
            What makes it work is the mix. A single ticket covers a full day of motorsport, a
            midway built for children, an open-air food court, an artisan market, and a main stage
            that runs into the night — closing with a fireworks finale.
          </p>
          <p>
            {EVENT.organisers} stage the event at {EVENT.venue}.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Why it matters"
        title="Vision, mission and impact"
        intro="Four commitments shape every edition of the festival."
        tinted
      >
        <div className="pillar-grid pillar-grid--two">
          {IMPACT_PILLARS.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h3 className="card__title">{pillar.title}</h3>
              <p className="card__body">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who comes" title="A multi-generational crowd">
        <ul className="stat-grid stat-grid--wide">
          {SITE_STATS.map((stat) => (
            <li className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
        <p className="section__more">
          High disposable-income youth, automotive enthusiasts, young professionals, urban families
          and corporate executives — a multi-racial audience ranging from ages 10 to 65, of which
          roughly 80% are Zimbabwean residents and 20% arrive from the region and further afield.
        </p>
      </Section>

      <Section className="cta-band">
        <div className="cta-band__inner">
          <h2 className="cta-band__title">Come see it for yourself</h2>
          <p className="cta-band__body">
            Borrowdale Racecourse, Liberation Legacy Way, Harare.
          </p>
          <div className="cta-row">
            <Link className="btn btn--primary" to="/tickets">
              Register interest
            </Link>
            <Link className="btn btn--ghost" to="/gallery">
              See past editions
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
