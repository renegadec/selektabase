import { EVENT } from '../data/event'

/** Text-only logo lockup. */
export default function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label={`${EVENT.name} — home`}>
      <span className="brand__text">
        <strong>{EVENT.brand}</strong>
        <small>Blowout Festival</small>
      </span>
    </a>
  )
}
