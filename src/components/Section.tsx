import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  /** Adds the tinted band treatment. */
  tinted?: boolean
  className?: string
  children: ReactNode
}

/** Consistent vertical rhythm and heading treatment for page sections. */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tinted = false,
  className = '',
  children,
}: SectionProps) {
  const classes = ['section', tinted ? 'section--tinted' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes} id={id}>
      <div className="container">
        {eyebrow || title || intro ? (
          <header className="section__head">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="section__title">{title}</h2> : null}
            {intro ? <p className="section__intro">{intro}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}
