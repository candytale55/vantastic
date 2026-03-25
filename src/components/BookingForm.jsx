import { useForm, useWatch } from 'react-hook-form'
import useFetch from '../hooks/useFetch.jsx'

export default function BookingForm() {

    const {
        register, handleSubmit, reset,
        control, formState
    } = useForm();

    const {
        data: locationsData,
        loading: locationsLoading,
        error: locationsError
    } = useFetch("/api/locations");


    //TODO: Cambiar
    const submit = () => {
        alert(`¡Gracias por la reserva!`);
        reset();
    }

    // TODO: Make a component? 
    const today = new Date().toISOString().split('T')[0];
    const pickupDateValue = useWatch({
        control,
        name: "pickupDate"
    });


    if (locationsLoading) return <p>Cargando ciudades</p>
    if (locationsError) return <p>Error al cargar ciudades: {locationsError.message}</p>;

    // Access the 'locations' array from the fetched data
    const locations = locationsData?.locations || [];


    return (
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
                        {...register("userName", {
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
                        })} />
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
                                message: "El formato del email no es válido."
                            }
                        })} />

                    {formState.errors.userEmail ?
                        <p className="form-error-message">{formState.errors.userEmail.message}</p> : null}
                </div>

                <div className="form-field">
                    <label
                        htmlFor="phone"
                        className="form-label">Teléfono:</label>
                    <input
                        type="tel"
                        id="phone"
                        className="form-input"
                        {...register("userPhone", {
                            required: {
                                value: true,
                                message: "Necesitas ingresar un número de teléfono."
                            },
                            pattern: {
                                value: /^\+?\d{9,15}$/,
                                message: "El teléfono debe contener entre 9 y 15 dígitos"
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
                                message: "Elige la ciudad donde recogerás el vehículo."
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
                                message: "Elige la ciudad donde entregarás el vehículo."
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
                                message: "El comentario es demasiado largo, máximo 300 caracteres."
                            }
                        })}></textarea>

                    {formState.errors.userComments ?
                        <p className="form-error-message">{formState.errors.userComments.message}</p> : null}
                </div>

                <div className="booking-form-actions">
                    <button
                        type="submit"
                        className="cta-button-large">Envía formulario</button>
                </div>
            </div>

        </form>
    )
}
