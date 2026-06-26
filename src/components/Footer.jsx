import { Link } from 'react-router-dom'
import { getCurrentYear } from '../utils/dateUtils.js'


export default function Footer() {
  return (
    <footer className="main-footer">

      <div className="footer-inner section-shell">

        <section className="footer-about">
          <h2 className="footer-logo">Vantastic!</h2>
          <p className="footer-text">La historia de Vantastic! no es la de una empresa. Es la de dos familias que llevan la carretera en la sangre desde los a&ntilde;os 60. No abrimos esto para hacer negocio. Lo abrimos porque no sab&iacute;amos vivir de otra manera.</p>
        </section>

        <div className="footer-links">
          <nav
            className="footer-nav"
            id="footer-nav">
            <h3 className="footer-subtitle">Secciones</h3>
            <ul>
              <li><Link to="/#nuestra-historia">Nuestra Historia</Link></li>
              <li><Link to="/vans">La Flota</Link></li>
              <li><Link to="/#newsletter">Newsletter</Link></li>
              <li><Link to="/#testimonials-social">La Comunidad</Link></li>
              {/* <li><a href="#footer-nav">Rutas</a></li> */}
              {/* <li><a href="#footer-nav">Preguntas frecuentes</a></li> */}
              {/* <li><a href="#footer-nav">Contacto</a></li> */}
            </ul>
          </nav>

          <nav
            className="footer-legal"
            id="footer-legal">
            <h3 className="footer-subtitle">Legal</h3>
            <ul>
              <li><a href="#footer-legal">Aviso Legal</a></li>
              <li><a href="#footer-legal">Pol&iacute;tica de Privacidad</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom section-shell">
        <hr />
        <h4 className="footer-copy">&copy; {getCurrentYear()} Vantastic! </h4>
      </div>
    </footer>
  )
}
