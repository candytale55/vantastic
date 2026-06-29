// Bloque de newsletter: recoge emails de visitantes interesados en rutas e historias.
import { useEffect, useRef, useState } from 'react'
import { Share2 } from 'lucide-react'


export default function HomeNewsletterSignup() {
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const closeModalButtonRef = useRef(null);
    const submitButtonRef = useRef(null);

    const submitNewsletterSignup = (event) => {
        event.preventDefault();
        setIsConfirmationModalOpen(true);
    }

    const closeConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
        submitButtonRef.current?.focus();
    }

    useEffect(() => {
        if (!isConfirmationModalOpen) return;

        closeModalButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeConfirmationModal();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isConfirmationModalOpen]);

    return (
        <>
            <section className="home-newsletter-signup" id="newsletter">
                <div className="newsletter-inner home-feature-section-inner section-shell">
                    <div className="newsletter-heading home-feature-section-heading">
                        <div className="newsletter-icon home-section-icon" aria-hidden="true">
                            <Share2 />
                        </div>

                        <h2 className="section-title">Newsletter</h2>
                        <p className="section-subtitle">Suscríbete a nuestra newsletter. Rutas, historias de carretera y cosas que vale la pena saber antes de salir de viaje.</p>

                    </div>

                    <form className="newsletter-form" onSubmit={submitNewsletterSignup}>
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
                            className="cta-button-small btn-yellow"
                            ref={submitButtonRef}>
                            Ap&uacute;ntame
                        </button>
                    </form>

                </div>
            </section>

            {isConfirmationModalOpen ? (
                <div className="booking-modal-backdrop">
                    <section
                        className="booking-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="newsletter-modal-title"
                        aria-describedby="newsletter-modal-description">
                        <button
                            type="button"
                            className="booking-modal-close"
                            aria-label="Cerrar mensaje de suscripción"
                            onClick={closeConfirmationModal}
                            ref={closeModalButtonRef}>
                            &times;
                        </button>

                        <div className="booking-modal-content">
                            <p className="booking-modal-kicker">Suscripción recibida</p>
                            <h2 id="newsletter-modal-title">Ya casi estás dentro</h2>
                            <p id="newsletter-modal-description">
                                Revisa tu correo electrónico para confirmar la suscripción y completar el alta.
                            </p>
                            <button
                                type="button"
                                className="cta-button btn-teal"
                                onClick={closeConfirmationModal}>
                                Cerrar
                            </button>
                        </div>
                    </section>
                </div>
            ) : null}
        </>
    )
}
