export default function BookingSuccessModal({ onClose, closeButtonRef }) {
    return (
        <div className="booking-modal-backdrop">
            <section
                className="booking-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-modal-title"
                aria-describedby="booking-modal-description">
                <button
                    type="button"
                    className="booking-modal-close"
                    aria-label="Cerrar mensaje de reserva"
                    onClick={onClose}
                    ref={closeButtonRef}>
                    &times;
                </button>

                <div className="booking-modal-content">
                    <p className="booking-modal-kicker">Reserva recibida</p>
                    <h2 id="booking-modal-title">Gracias por preferirnos</h2>
                    <p id="booking-modal-description">
                        Revise su correo electronico. Le enviaremos su factura y los proximos pasos para la recogida.
                    </p>
                    <button
                        type="button"
                        className="cta-button btn-teal"
                        onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </section>
        </div>
    )
}
