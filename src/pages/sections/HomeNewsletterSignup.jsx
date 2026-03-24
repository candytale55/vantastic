

export default function HomeNewsletterSignup() {
    return (
        <section className="home-newsletter-signup section-shell">

            <h2 className="section-title">Kilómetro Cero</h2>
            
            <p className="section-subtitle">Rutas, historias de carretera y cosas que vale la pena saber antes de salir. Una vez al mes. Sin ruido.</p>

            <form className="newsletter-form">
            
                <label
                    htmlFor="newsletter-email"
                    className="sr-only">
                    Tu dirección de correo</label>
                <input
                    type="email"
                    id="newsletter-email"
                    className="newsletter-input"
                    placeholder="tu dirección de correo" aria-label="Introduce tu dirección de correo electrónico" />
                
                <button
                    type="submit" className="cta-button-small">Apúntame</button>
            </form>
            
            <p className="next-issue-hook">Próximo número: las carreteras secundarias más bonitas de la Península que no salen en ninguna guía.</p>
        </section>
    )
}
