/**
 * Slowly counter-rotating gear rings that sit behind the headline — a nod to
 * the "still being built" status of the site. Pure CSS, decorative.
 */
export default function GearRings() {
  return (
    <div className="gears" aria-hidden="true">
      <span className="gear gear--large" />
      <span className="gear gear--small" />
    </div>
  )
}
