import { Link } from 'react-router-dom'

//TODO:Add dynamic date in JS.
export default function Footer() {
  return (
    <footer className="footer section main-footer">

      <div className="footer-content-container">
        <section class="footer-about">
          <h2>Vantastic!</h2>
          <p>Crecimos en una furgoneta. Abrimos esto para que tú puedas sentir lo mismo.</p>
        </section>
      </div>

      <nav className="footer-nav">
        <h3>Enlaces rápidos:</h3>
        <ul>
          <li><Link to="/about">Nuestra historia</Link></li>
          <li><Link to="/vans">Vans</Link></li>
          <li><Link to="/community">La comunidad</Link></li>
          <li><Link to="/routes">Rutas</Link></li>
          <li><Link to="/faq">Preguntas frecuentes</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
      
      <hr />
      <h4>&copy; 2026 Vantastic!</h4>
    </footer>
  )
}
