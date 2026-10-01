import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow?: string
  title: string
  intro?: string
  children?: ReactNode
}

/** Standard masthead used at the top of every inner page. */
export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
        {intro ? <p className="page-hero__intro">{intro}</p> : null}
        {children ? <div className="page-hero__extra">{children}</div> : null}
      </div>
    </section>
  )
}
