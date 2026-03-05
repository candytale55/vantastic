import { useForm, useWatch } from 'react-hook-form'

export default function BookingForm() {

    const { register, handleSubmit, reset, control, formState } = useForm();


    const submit = () => {
        alert(`¡Gracias por la reserva!`);//TODO: Cambiar
        reset();
    }

    // TODO: Make a component? 
    const today = new Date().toISOString().split('T')[0];
    const pickupDateValue = useWatch({
        control,
        name: "pickupDate"});

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
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

            {formState.errors.userName ? <p>{formState.errors.userName.message}</p> : null}
            


            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
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

            {formState.errors.userEmail ? <p>{formState.errors.userEmail.message}</p> : null}


            <label htmlFor="phone">Teléfono:</label>
            <input
                type="tel"  
                id="phone"
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
            
            {formState.errors.userPhone ? <p>{formState.errors.userPhone.message}</p> : null}
            

            <label htmlFor="pickup-date">Fecha recogida:</label>
            <input
                type="date"
                id="pickup-date"
                min={today}
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

            {formState.errors.pickupDate ? <p>{formState.errors.pickupDate.message}</p> : null}
            

            <label htmlFor="pickupLocation">Ciudad de recogida:</label>
            <select
                id="pickupLocation"
                defaultValue=""
                {...register("pickupLocation", {
                    required: {
                        value: true,
                        message: "Elige la ciudad donde recogerás el vehículo."
                    }  
                })}>
                                
                <option value="" disabled>Selecciona una ciudad</option>
                <option value="Alicante">Alicante</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Bilbao">Bilbao</option>
                <option value="Granada">Granada</option>
                <option value="Madrid">Madrid</option>
                <option value="Málaga">Málaga</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Torrevieja">Torrevieja</option>
                <option value="Valencia">Valencia</option>
                <option value="Vigo">Vigo</option>
                <option value="Zaragoza">Zaragoza</option>
            </select>

            {formState.errors.pickupLocation ? <p>{formState.errors.pickupLocation.message}</p> : null}
            
            <label htmlFor="return-date">Fecha entrega:</label>
            <input
                type="date"
                id="return-date"
                min={pickupDateValue || today}
                {...register("returnDate", {
                    required: {
                        value: true,
                        message: "Selecciona una fecha de recogida."
                    }
                })} />

            {formState.errors.returnDate ? <p>{formState.errors.returnDate.message}</p> : null}

            <label htmlFor="returnLocation">Ciudad de entrega:</label>
            <select
                id="returnLocation"
                defaultValue=""
                {...register("returnLocation", {
                    required: {
                        value: true,
                        message: "Elige la ciudad donde entregarás el vehículo."
                    }
                })}>
                                
                <option value="" disabled>Selecciona una ciudad</option>
                <option value="Alicante">Alicante</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Bilbao">Bilbao</option>
                <option value="Granada">Granada</option>
                <option value="Madrid">Madrid</option>
                <option value="Málaga">Málaga</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Torrevieja">Torrevieja</option>
                <option value="Valencia">Valencia</option>
                <option value="Vigo">Vigo</option>
                <option value="Zaragoza">Zaragoza</option>
            </select>
            {formState.errors.returnLocation ? <p>{formState.errors.returnLocation.message}</p> : null}
                        
            <label htmlFor="userComments">Comentarios y peticiones:</label>
            <textarea
                id="userComments"
                placeholder="Peticiones especiales, accesibilidad..."
                {...register("userComments", {
                    maxLength: {
                        value: 300,
                        message: "El comentario es demasiado largo, máximo 300 caracteres."
                    }
                })}></textarea>
            
            {formState.errors.userComments ? <p>{formState.errors.userComments.message}</p> : null}
            

            <button
                type="submit">Envía formulario</button>

        </form>
    )
}
