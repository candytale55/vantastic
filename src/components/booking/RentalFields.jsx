import BookingField from './BookingField.jsx'

export default function RentalFields({ register, errors, locations, today, pickupDate }) {
    return (
        <>
            <BookingField id="pickup-date" label="Fecha recogida:" error={errors.pickupDate?.message}>
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
            </BookingField>

            <BookingField
                id="pickupLocation"
                label="Ciudad de recogida:"
                error={errors.pickupLocation?.message}>
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
                        <option key={location.id} value={location.name}>{location.name}</option>
                    ))}
                </select>
            </BookingField>

            <BookingField id="return-date" label="Fecha entrega:" error={errors.returnDate?.message}>
                <input
                    type="date"
                    id="return-date"
                    className="form-input"
                    min={pickupDate || today}
                    {...register("returnDate", {
                        required: {
                            value: true,
                            message: "Selecciona una fecha de entrega."
                        }
                    })} />
            </BookingField>

            <BookingField
                id="returnLocation"
                label="Ciudad de entrega:"
                error={errors.returnLocation?.message}>
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
                        <option key={location.id} value={location.name}>{location.name}</option>
                    ))}
                </select>
            </BookingField>

            <BookingField
                id="userComments"
                label="Comentarios y peticiones:"
                error={errors.userComments?.message}>
                <textarea
                    id="userComments"
                    placeholder="Peticiones especiales, accesibilidad..."
                    className="form-input"
                    {...register("userComments", {
                        maxLength: {
                            value: 300,
                            message: "El comentario es demasiado largo, maximo 300 caracteres."
                        }
                    })} />
            </BookingField>
        </>
    )
}
