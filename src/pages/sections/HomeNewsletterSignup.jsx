

export default function HomeNewsletterSignup() {
    return (
        <section class="home-newsletter-signup-section">
            <h2>Kilómetro Cero</h2>
            <p class="subtitle">Rutas, historias de carretera y cosas que vale la pena saber antes de salir. Una vez al mes. Sin ruido.</p>
            <form class="newsletter-form">
                <label htmlFor="newsletter-email" class="sr-only">Tu dirección de correo</label>
                <input type="email" id="newsletter-email" placeholder="tu dirección de correo" aria-label="Introduce tu dirección de correo electrónico" />
                <button type="submit" class="cta-button-small">Apúntame</button>
            </form>
            <p class="next-issue-hook">Próximo número: las carreteras secundarias más bonitas de la Península que no salen en ninguna guía.</p>
        </section>
    )
}
