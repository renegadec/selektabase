import { CONTACT, EVENT } from '../data/event'

const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`

/** Persistent strip of venue, office and direct contact details. */
export default function ContactBar() {
  return (
    <div className="contact">
      <ul className="contact__row">
        <li className="contact__item">
          <span className="contact__label">Venue</span>
          {EVENT.venue}
        </li>
        <li className="contact__item">
          <span className="contact__label">Call</span>
          <a href={telHref(CONTACT.phones[0])}>{CONTACT.phones[0]}</a>
          <span className="contact__sep">/</span>
          <a href={telHref(CONTACT.phones[1])}>{CONTACT.phones[1]}</a>
        </li>
        <li className="contact__item">
          <span className="contact__label">Email</span>
          <a href={`mailto:${CONTACT.emails[0]}`}>{CONTACT.emails[0]}</a>
        </li>
      </ul>

      <p className="contact__office">
        <span className="contact__label">Office</span>
        {CONTACT.office}
      </p>
    </div>
  )
}
