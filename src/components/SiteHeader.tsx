import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { EVENT } from '../data/event'
import { NAV_LINKS, PRIMARY_CTA } from '../data/navigation'

/** Sticky site header with primary navigation and a mobile drawer. */
export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label={`${EVENT.name} — home`}>
          <span className="brand__text">
            <strong>{EVENT.brand}</strong>
            <small>Blowout Festival</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                  to={link.to}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link className="btn btn--primary btn--sm" to={PRIMARY_CTA.to}>
            {PRIMARY_CTA.label}
          </Link>
          <button
            type="button"
            className={open ? 'nav-toggle is-open' : 'nav-toggle'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className={open ? 'drawer is-open' : 'drawer'} id="mobile-nav" hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="drawer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'drawer__link is-active' : 'drawer__link'
                  }
                  to={link.to}
                  end={link.to === '/'}
                  onClick={close}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
