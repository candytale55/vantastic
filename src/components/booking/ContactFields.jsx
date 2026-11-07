import BookingField from './BookingField.jsx'

export default function ContactFields({ register, errors, firstInputRef }) {
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
            <BookingField id="name" label="Nombre:" error={errors.userName?.message}>
                <input
                    type="text"
                    id="name"
                    className="form-input"
                    {...userNameField}
                    ref={(element) => {
                        userNameField.ref(element);
                        if (firstInputRef) firstInputRef.current = element;
                    }} />
            </BookingField>

            <BookingField id="email" label="Email:" error={errors.userEmail?.message}>
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
            </BookingField>

            <BookingField id="phone" label="Telefono:" error={errors.userPhone?.message}>
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
            </BookingField>
        </>
    )
}
