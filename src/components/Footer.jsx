import { Link } from 'react-router-dom'
import { getCurrentYear } from '../utils/dateUtils.js'

//TODO:Add dynamic date in JS.
export default function Footer() {
  return (
    <footer className="main-footer">

      <div className="footer-content-container">
        <section class="footer-about">
          <h2>Vantastic!</h2>
          <p>Crecimos en una furgoneta. Abrimos esto para que tú puedas sentir lo mismo.</p>
        </section>
      </div>

      <nav className="footer-nav" id="footer-nav">
        <h3>Enlaces rápidos:</h3>
        <ul>
          <li><a href="#footer-nav">Nuestra historia</a></li>
          <li><a href="#footer-nav">Vans</a></li>
          <li><a href="#footer-nav">La comunidad</a></li>
          <li><a href="#footer-nav">Rutas</a></li>
          <li><a href="#footer-nav">Preguntas frecuentes</a></li>
          <li><a href="#footer-nav">Contacto</a></li>
        </ul>
      </nav>

      <nav className="footer-legal" id="footer-legal">
        <h3>Legal</h3>
        <ul>
          <li><a href="#footer-legal">Aviso Legal</a></li>
          <li><a href="#footer-legal">Política de Privacidad</a></li>
        </ul>
      </nav>

      <hr />
      <h4>&copy; {getCurrentYear()} Vantastic! </h4>
    </footer>
  )
}
