import { ATTRACTIONS } from '../data/event'

/** Infinite marquee of festival attractions. Decorative only. */
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[0, 1].map((group) => (
          <ul className="ticker__group" key={group}>
            {ATTRACTIONS.map((item) => (
              <li className="ticker__item" key={item}>
                <span className="ticker__spark" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
