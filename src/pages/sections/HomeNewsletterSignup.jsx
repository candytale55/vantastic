// Bloque de newsletter: recoge emails de visitantes interesados en rutas e historias.
import { Share2 } from 'lucide-react'


export default function HomeNewsletterSignup() {
    return (
        <section className="home-newsletter-signup" id="newsletter">
            <div className="newsletter-inner home-feature-section-inner section-shell">
                <div className="newsletter-heading home-feature-section-heading">
                    <div className="newsletter-icon home-section-icon" aria-hidden="true">
                        <Share2 />
                    </div>

                    <h2 className="section-title">Newsletter</h2>
                    <p className="section-subtitle">Suscríbete a nuestra newsletter. Rutas, historias de carretera y cosas que vale la pena saber antes de salir de viaje.</p>

                </div>

                <form className="newsletter-form">
                    <label
                        htmlFor="newsletter-email"
                        className="sr-only">
                        Tu direcci&oacute;n de correo
                    </label>

                    <input
                        type="email"
                        id="newsletter-email"
                        className="newsletter-input"
                        placeholder="Tu direcci&oacute;n de correo"
                        aria-label="Introduce tu direcci&oacute;n de correo electr&oacute;nico" />

                    <button
                        type="submit"
                        className="cta-button-small btn-yellow">
                        Ap&uacute;ntame
                    </button>
                </form>


            </div>
        </section>
    )
}
