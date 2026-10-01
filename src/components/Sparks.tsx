import type { CSSProperties } from 'react'

const COUNT = 18

/**
 * Deterministic ember / dust particles drifting up behind the wordmark.
 * Values are derived from the index so the layout is stable across renders.
 */
const SPARKS = Array.from({ length: COUNT }, (_, i) => {
  const left = (i * 61.8) % 100
  const size = 1.6 + (i % 4) * 0.9
  const duration = 11 + (i % 6) * 2.4
  const delay = -(i * 1.35)
  const drift = ((i % 5) - 2) * 22

  return {
    key: i,
    style: {
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      '--drift': `${drift}px`,
    } as CSSProperties,
  }
})

export default function Sparks() {
  return (
    <div className="sparks" aria-hidden="true">
      {SPARKS.map((spark) => (
        <span className="sparks__ember" key={spark.key} style={spark.style} />
      ))}
    </div>
  )
}
