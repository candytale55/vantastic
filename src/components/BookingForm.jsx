import { useForm } from 'react-hook-form'

export default function BookingForm() {

    const { register, handleSubmit, reset } = useForm();

    console.log("Soy el componente y me re-renderizo"); //TODO: Eliminar después de las pruebas.

    const submit = ( { userName, userEmail}) => {
        console.log(`Van alquilada a ${userName} con email ${userEmail}`);  // TODO: Borrar después de las pruebas.
        if (userName && userName) {
            console.log(`Van alqulada a ${userName} con email ${userName}`); //TODO: Eliminar despues de pruebas
            alert(`¡Gracias ${userName}! Nos pondremos en contacto con ${userEmail}`);//TODO: Eliminar despues de pruebas
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                {...register("userName", { required: true })} />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                {...register("userEmail", { required: true })} />
            <button type="submit">Envía formulario</button>
        </form>
    )
}
