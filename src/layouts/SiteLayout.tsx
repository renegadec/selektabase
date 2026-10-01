import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

/** Shared chrome for every page: sticky header, routed content, footer. */
export default function SiteLayout() {
  const { pathname } = useLocation()

  // Land at the top of each page on navigation.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main className="site-main" id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
