import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <main className="not-found-page section-shell">
      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="not-found-code">404</p>
        <h1 id="not-found-title">Esta p&aacute;gina no existe</h1>
        <Link to="/" className="cta-button btn-yellow">Volver al inicio</Link>
      </section>
    </main>
  )
}
