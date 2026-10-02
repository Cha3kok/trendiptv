/** Slowly drifting colour glows behind every page. Pure CSS, so it costs no JavaScript. */
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="noise" />
    </div>
  )
}
