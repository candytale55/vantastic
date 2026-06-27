import { Share2 } from 'lucide-react'


export default function HomeNewsletterSignup() {
    return (
        <section className="home-newsletter-signup" id="newsletter">
            <div className="newsletter-inner section-shell">
                <div className="newsletter-heading">
                    <div className="newsletter-icon" aria-hidden="true">
                        <Share2 />
                    </div>

                    <h2 className="section-title">Suscríbete a nuestra Newsletter</h2>
                    <p className="section-subtitle">Rutas, historias de carretera y cosas que vale la pena saber antes de salir de viaje.</p>
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
                        placeholder="tu direcci&oacute;n de correo"
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
