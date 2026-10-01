import { Link } from 'react-router-dom'
import { CONTACT, EVENT, NEXT_EDITION, SPONSOR_DECK_URL } from '../data/event'
import { NAV_LINKS } from '../data/navigation'
import SocialLinks from './SocialLinks'

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`

/** Resolved once at module scope — keeps render pure. */
const CURRENT_YEAR = new Date().getFullYear()

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__wordmark">
            {EVENT.brand} <span>Blowout Festival</span>
          </p>
          <p className="site-footer__tagline">{EVENT.tagline}</p>
          <SocialLinks />
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <h2 className="site-footer__heading">Explore</h2>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h2 className="site-footer__heading">Contact</h2>
          <ul>
            <li>{EVENT.venue}</li>
            <li>
              {CONTACT.phones.map((phone, index) => (
                <span key={phone}>
                  {index > 0 ? <span className="contact__sep"> / </span> : null}
                  <a href={telHref(phone)}>{phone}</a>
                </span>
              ))}
            </li>
            <li>
              <a href={`mailto:${CONTACT.emails[0]}`}>{CONTACT.emails[0]}</a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.emails[1]}`}>{CONTACT.emails[1]}</a>
            </li>
          </ul>
        </div>

        <div className="site-footer__office">
          <h2 className="site-footer__heading">Office</h2>
          <p>{CONTACT.office}</p>
          <p className="site-footer__organisers">{EVENT.organisers}</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © {CURRENT_YEAR} {EVENT.name}. All rights reserved.
        </p>
        <p className="site-footer__meta">
          {NEXT_EDITION.dateLabel ?? 'Next edition — date to be announced'}
          {SPONSOR_DECK_URL ? null : ' · Sponsorship deck available on request'}
        </p>
      </div>
    </footer>
  )
}
