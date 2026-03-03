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

            <label htmlFor="phone">Teléfono:</label>
            <input
                type="tel"  
                id="phone"
                {...register("userPhone", { required: true })} />
            
            <label htmlFor="pickup-location">Lugar de recogida:</label>
            <input
                type="text"  // Cambiar por select
                id="pickup-location"
                {...register("pickupLocation", { required: true })} />

            <label htmlFor="pickup-date">Fecha recogida:</label>
            <input
                type="date"
                id="pickup-date"
                {...register("pickupDate", { required: true })} />
            
            <label htmlFor="pickup-location">Lugar de recogida:</label>
            <input
                type="text"  // Cambiar por select
                id="pickup-location" 
                {...register("pickupLocation", { required: true })} />


            <label htmlFor="return-date">Fecha entrega:</label>
            <input
                type="date"
                id="return-date"
                {...register("returnDate", { required: true })} />

            <label htmlFor="return-location">Lugar de entrega:</label>
            <input
                type="text"  // Cambiar por select
                id="return-location"
                {...register("returnLocation", { required: true })} />
            
            <fieldset>
                <legend>Portaequipaje de Techo:</legend>
                <input
                    type="radio"
                    id="superficiePlanaRack"
                    {...register("racks")} />
                <label htmlFor="superficiePlanaRack">Plana / rejilla </label>

                <input
                    type="radio"
                    id="portaTablasRack"
                    {...register("racks")} />
                <label htmlFor="portaTablasRack">Porta-tablas de surf / kayak / paddle</label>

                <input
                    type="radio"
                    id="portaBiciRack"
                    {...register("racks")} />
                <label htmlFor="portaBiciRack">Porta-bicicletas de techo</label>

                <input
                    type="radio"
                    id="canastillaAltaRack"
                    {...register("racks")} />
                <label htmlFor="canastillaAltaRack">Canastilla alta</label>
            </fieldset>

            <fieldset>
                <legend>Accesorios adicionales:</legend>
                <input
                    type="checkbox"
                    id="gpsExtra"
                    {...register("extras")} />
                <label htmlFor="gpsExtra">GPS</label>

                <input
                    type="checkbox"
                    id="hitchExtra"
                    {...register("extras")} />
                <label htmlFor="hitchExtra">Con bola de enganche</label>
                
                <input
                    type="checkbox"
                    id="solarPanelsExtra"
                    {...register("extras")} />
                <label htmlFor="solarPanelsExtra">Con paneles solares</label>

                <input
                    type="checkbox"
                    id="petsExtra"
                    {...register("extras")} />
                <label htmlFor="petsExtra">Protectores para mascotas</label>
            </fieldset>
            
            <label htmlFor="userComments">Comentarios y peticiones:</label>
            <textarea id="userComments" placeholder="Peticiones especiales, accesibilidad..."></textarea>
            <button type="submit">Envía formulario</button>

        </form>
    )
}
