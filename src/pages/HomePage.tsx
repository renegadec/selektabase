import { Link } from 'react-router-dom'
import Section from '../components/Section'
import YouTubeBackground from '../components/YouTubeBackground'
import { EVENT, MEDIA, NEXT_EDITION } from '../data/event'
import { EXPERIENCE_PILLARS } from '../data/experience'
import { PRIMARY_CTA, SECONDARY_CTA } from '../data/navigation'
import { FORM_RECIPIENT, SITE_STATS } from '../data/site'
import { SPONSOR_TIERS } from '../data/sponsorship'

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <YouTubeBackground
          videoId={MEDIA.videoId}
          title={MEDIA.videoTitle}
          poster={MEDIA.poster}
          start={MEDIA.segmentStart}
          end={MEDIA.segmentEnd}
        />
        <div className="scrim" aria-hidden="true" />

        <div className="container home-hero__inner">
          <p className="eyebrow">
            {NEXT_EDITION.dateLabel ?? 'Next edition — date to be announced'} ·{' '}
            {NEXT_EDITION.city}
          </p>

          <h1 className="wordmark">
            <span className="wordmark__kicker">{EVENT.brand}</span>{' '}
            <span className="wordmark__main" data-text="Blowout Festival">
              Blowout Festival
            </span>
          </h1>

          <p className="tagline">{EVENT.tagline}</p>

          <p className="lede">
            Zimbabwe’s premier motorsport lifestyle experience — driftkhana, burnouts and bike
            stunts, a family carnival, live concerts and a corporate expo, all at{' '}
            {EVENT.venue.split(',')[0]}.
          </p>

          <div className="cta-row">
            <Link className="btn btn--primary" to={PRIMARY_CTA.to}>
              {PRIMARY_CTA.label}
            </Link>
            <Link className="btn btn--ghost" to={SECONDARY_CTA.to}>
              {SECONDARY_CTA.label}
            </Link>
          </div>

          <ul className="facts">
            {SITE_STATS.map((stat) => (
              <li className="facts__item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section
        eyebrow="What it is"
        title="One day, four worlds"
        intro="The Blowout is built as an all-day, multi-activity festival — engineered so car enthusiasts and families both stay from gates to fireworks."
      >
        <div className="pillar-grid">
          {EXPERIENCE_PILLARS.map((pillar) => (
            <article className="card" key={pillar.id}>
              <p className="card__eyebrow">{pillar.eyebrow}</p>
              <h3 className="card__title">{pillar.title}</h3>
              <p className="card__body">{pillar.blurb}</p>
              <ul className="tag-list">
                {pillar.items.map((item) => (
                  <li className="tag" key={item.name}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="section__more">
          <Link className="link-arrow" to="/experience">
            Explore the full line-up
          </Link>
        </p>
      </Section>

      <Section
        eyebrow="The legacy"
        title="Ten years of Zimbabwean car culture"
        intro="Selekta Base (Arnold Chiguta) has spent the last decade turning grassroots car spinning into the country’s safest — and most popular — mainstream automotive festival."
        tinted
      >
        <div className="split">
          <div className="split__body">
            <p>
              What began as informal street-level burnouts is now a regulated, enclosed and
              professionally stewarded motorsport environment, drawing premier drivers from across
              Southern Africa alongside the best Zimbabwean talent.
            </p>
            <p>
              Every edition anchors charity work through the Selekta Base Foundation, and pushes
              domestic and cross-border sports tourism into Harare.
            </p>
            <Link className="link-arrow" to="/about">
              Read the full story
            </Link>
          </div>
          <ul className="stat-grid">
            {SITE_STATS.map((stat) => (
              <li className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Corporate"
        title="Partner with the Blowout"
        intro="Diamond, Gold and Silver packages put your brand on the track, on the stage and on the cars — in front of a 7,000-strong multi-generational crowd."
      >
        <ul className="tier-strip">
          {SPONSOR_TIERS.map((tier) => (
            <li className="tier-strip__item" key={tier.id}>
              <span className="tier-strip__name">{tier.name}</span>
              <span className="tier-strip__price">{tier.investment}</span>
              {tier.note ? <span className="tier-strip__note">{tier.note}</span> : null}
            </li>
          ))}
        </ul>
        <p className="section__more">
          <Link className="link-arrow" to="/sponsorship">
            See what each package includes
          </Link>
        </p>
      </Section>

      <Section className="cta-band">
        <div className="cta-band__inner">
          <h2 className="cta-band__title">Be there for the next one</h2>
          <p className="cta-band__body">
            Register your interest for tickets, or talk to us about exhibiting and sponsorship.
          </p>
          <div className="cta-row">
            <Link className="btn btn--primary" to="/tickets">
              Register interest
            </Link>
            <a className="btn btn--ghost" href={`mailto:${FORM_RECIPIENT}`}>
              Email the team
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
