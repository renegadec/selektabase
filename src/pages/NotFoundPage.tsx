import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data/navigation'

export default function NotFoundPage() {
  return (
    <section className="section notfound">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1 className="notfound__title">That page took a wrong turn</h1>
        <p className="notfound__body">
          The page you were after doesn’t exist. Try one of these instead:
        </p>
        <ul className="notfound__links">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link className="link-arrow" to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
