// Footer global: agrupa historia breve, enlaces sociales y navegacion secundaria.
import { Link } from 'react-router-dom'
import { getCurrentYear } from '../utils/dateUtils.js'


export default function Footer() {
  return (
    <footer className="main-footer" id="footer">

      <div className="footer-inner section-shell">

        <section className="footer-about">
          <h2 className="footer-logo">Vantastic!</h2>
          <p className="footer-text">La historia de Vantastic! no es la de una empresa. Es la de dos familias que llevan la carretera en la sangre desde los a&ntilde;os 60. No abrimos esto para hacer negocio. Lo abrimos porque no sab&iacute;amos vivir de otra manera.</p>
          <ul className="social-links">
            <li>
              <a href="#footer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#footer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M12.8 2h3.3a5.7 5.7 0 0 0 4 4V9a8 8 0 0 1-4-1.1v7.1A7 7 0 1 1 9 8.1v3.4a3.6 3.6 0 1 0 2.9 3.5V2z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#footer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.3A4.7 4.7 0 1 0 12 18.7a4.7 4.7 0 0 0 0-9.4zm0 7.7A3 3 0 1 1 12 10a3 3 0 0 1 0 6zm4.8-9.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
                </svg>
              </a>
            </li>
          </ul>
        </section>

        <div className="footer-links">
          <nav
            className="footer-nav"
            id="footer-nav">
            <h3 className="footer-subtitle">Secciones</h3>
            <ul>
              <li><Link to="/#nuestra-historia">Nuestra Historia</Link></li>
              <li><Link to="/vans">La Flota</Link></li>
              <li><Link to="/#galeria">Galer&iacute;a</Link></li>
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
