import { useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import useFetch from '../hooks/useFetch.jsx'

export default function BookingForm({ firstInputRef }) {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const closeModalButtonRef = useRef(null);
    const submitButtonRef = useRef(null);

    const {
        register, handleSubmit, reset,
        control, formState
    } = useForm();

    const {
        data: locationsData,
        loading: locationsLoading,
        error: locationsError
    } = useFetch("/api/locations");

    const submit = () => {
        reset();
        setIsSuccessModalOpen(true);
    }

    const closeSuccessModal = () => {
        setIsSuccessModalOpen(false);
        submitButtonRef.current?.focus();
    }

    const today = new Date().toISOString().split('T')[0];
    // The return date cannot be earlier than the selected pickup date.
    const pickupDateValue = useWatch({
        control,
        name: "pickupDate"
    });

    useEffect(() => {
        if (!isSuccessModalOpen) return;

        // Keep the success modal keyboard-friendly: focus starts on close and Escape exits.
        closeModalButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeSuccessModal();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isSuccessModalOpen]);

    if (locationsLoading) return <p>Cargando ciudades</p>
    if (locationsError) return <p>Error al cargar ciudades: {locationsError}</p>;

    const locations = locationsData?.locations || [];
    const userNameField = register("userName", {
        required: {
            value: true,
            message: "Por favor, escribe tu nombre."
        },
        minLength: {
            value: 2,
            message: "El nombre debe tener al menos 2 caracteres."
        },
        maxLength: {
            value: 50,
            message: "El nombre no debe exceder los 50 caracteres."
        }
    });

    return (
        <>
            <form
                onSubmit={handleSubmit(submit)} className="booking-form">

                <div className="booking-form-grid">
                    <div className="form-field">
                        <label
                            htmlFor="name"
                            className="form-label">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            {...userNameField}
                            ref={(element) => {
                                // React Hook Form needs its ref, and VanDetail also needs a ref for "Reserva Ahora".
                                userNameField.ref(element);
                                if (firstInputRef) firstInputRef.current = element;
                            }} />
                        {formState.errors.userName ?
                            <p className="form-error-message">{formState.errors.userName.message}</p> : null}
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="email"
                            className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            {...register("userEmail", {
                                required: {
                                    value: true,
                                    message: "Por favor, escribe tu email."
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "El formato del email no es valido."
                                }
                            })} />

                        {formState.errors.userEmail ?
                            <p className="form-error-message">{formState.errors.userEmail.message}</p> : null}
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="phone"
                            className="form-label">Telefono:</label>
                        <input
                            type="tel"
                            id="phone"
                            className="form-input"
                            {...register("userPhone", {
                                required: {
                                    value: true,
                                    message: "Necesitas ingresar un numero de telefono."
                                },
                                pattern: {
                                    value: /^\+?\d{9,15}$/,
                                    message: "El telefono debe contener entre 9 y 15 digitos"
                                }

                            })} />

                        {formState.errors.userPhone ?
                            <p className="form-error-message">{formState.errors.userPhone.message}</p> : null}
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="pickup-date"
                            className="form-label">Fecha recogida:</label>
                        <input
                            type="date"
                            id="pickup-date"
                            min={today}
                            className="form-input"
                            {...register("pickupDate", {
                                required: {
                                    value: true,
                                    message: "Por favor, elige la fecha de recogida."
                                },
                                min: {
                                    value: today,
                                    message: "La fecha de recogida no puede en el pasado."
                                }
                            })} />

                        {formState.errors.pickupDate ?
                            <p className="form-error-message">{formState.errors.pickupDate.message}</p> : null}
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="pickupLocation" className="form-label">Ciudad de recogida:</label>
                        <select
                            id="pickupLocation"
                            defaultValue=""
                            className="form-input"
                            {...register("pickupLocation", {
                                required: {
                                    value: true,
                                    message: "Elige la ciudad donde recogeras el vehiculo."
                                }
                            })}>

                            <option value="" disabled>Selecciona una ciudad</option>

                            {locations.map(location => (
                                <option
                                    key={location.id}
                                    value={location.name}>{location.name}</option>
                            ))}
                        </select>

                        {formState.errors.pickupLocation ?
                            <p className="form-error-message">{formState.errors.pickupLocation.message}</p> : null}
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="return-date"
                            className="form-label">Fecha entrega:</label>
                        <input
                            type="date"
                            id="return-date"
                            className="form-input"
                            min={pickupDateValue || today}
                            {...register("returnDate", {
                                required: {
                                    value: true,
                                    message: "Selecciona una fecha de recogida."
                                }
                            })} />

                        {formState.errors.returnDate ?
                            <p className="form-error-message">{formState.errors.returnDate.message}</p> : null}
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="returnLocation" className="form-label">Ciudad de entrega:</label>
                        <select
                            id="returnLocation"
                            defaultValue=""
                            className="form-input"
                            {...register("returnLocation", {
                                required: {
                                    value: true,
                                    message: "Elige la ciudad donde entregaras el vehiculo."
                                }
                            })}>

                            <option value="" disabled>Selecciona una ciudad</option>
                            {locations.map(location => (
                                <option
                                    key={location.id}
                                    value={location.name}>{location.name}</option>
                            ))}
                        </select>
                        {formState.errors.returnLocation ?
                            <p className="form-error-message">{formState.errors.returnLocation.message}</p> : null}
                    </div>

                    <div className="form-field">
                        <label
                            htmlFor="userComments" className="form-label">Comentarios y peticiones:</label>
                        <textarea
                            id="userComments"
                            placeholder="Peticiones especiales, accesibilidad..."
                            className="form-input"
                            {...register("userComments", {
                                maxLength: {
                                    value: 300,
                                    message: "El comentario es demasiado largo, maximo 300 caracteres."
                                }
                            })}></textarea>

                        {formState.errors.userComments ?
                            <p className="form-error-message">{formState.errors.userComments.message}</p> : null}
                    </div>

                    <div className="booking-form-actions">
                        <button
                            type="submit"
                            className="cta-button"
                            ref={submitButtonRef}>Envia formulario</button>
                    </div>
                </div>
            </form>

            {isSuccessModalOpen ? (
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
                            onClick={closeSuccessModal}
                            ref={closeModalButtonRef}>
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
                                onClick={closeSuccessModal}>
                                Cerrar
                            </button>
                        </div>
                    </section>
                </div>
            ) : null}
        </>
    )
}
