import { useForm } from 'react-hook-form'

export default function BookingForm() {

    const { register, handleSubmit, reset, watch } = useForm();

/*     console.log("Soy el componente y me re-renderizo"); //TODO: Eliminar después de las pruebas. */

    const submit = ( data ) => {
        console.log("Data:", data); //TODO: Eliminar despues de pruebas
        alert(`¡Gracias por la reserva!`);//TODO: Eliminar despues de pruebas
        reset();
    }

    // TODO: Make a component? 
    const today = new Date().toISOString().split('T')[0];
    const pickupDateValue = watch("pickupDate");

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
            
            <label htmlFor="pickup-date">Fecha recogida:</label>
            <input
                type="date"
                id="pickup-date"
                min={today}
                {...register("pickupDate", { required: true })} />

            <label htmlFor="pickup-location">Ciudad de recogida:</label>
            <select
                id="pickup-location"
                defaultValue=""
                {...register("pickup-location", { required: true })}>
                
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
            
            <label htmlFor="return-date">Fecha entrega:</label>
            <input
                type="date"
                id="return-date"
                min={pickupDateValue || today}
                {...register("returnDate", { required: true })} />

            <label htmlFor="return-location">Ciudad de entrega:</label>
            <select
                id="return-location"
                defaultValue=""
                {...register("return-location", { required: true })}>
                
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
            
            <fieldset>
                <legend>Portaequipaje de Techo:</legend>
                <input
                    type="radio"
                    id="superficiePlanaRack"
                    value="plana"
                    {...register("racks")} />
                <label htmlFor="superficiePlanaRack">Plana / rejilla </label>

                <input
                    type="radio"
                    id="portaTablasRack"
                    value="surf"
                    {...register("racks")} />
                <label htmlFor="portaTablasRack">Porta-tablas de surf / kayak / paddle</label>

                <input
                    type="radio"
                    id="portaBiciRack"
                    value="bici"
                    {...register("racks")} />
                <label htmlFor="portaBiciRack">Porta-bicicletas de techo</label>

                <input
                    type="radio"
                    id="plegableRack"
                    value="maletero-plegable"
                    {...register("racks")} />
                <label htmlFor="plegableRack">Maletero plegable</label>
            </fieldset>

            <fieldset>
                <legend>Accesorios adicionales:</legend>
                <input
                    type="checkbox"
                    id="gpsExtra"
                    value="gps"
                    {...register("extras")} />
                <label htmlFor="gpsExtra">GPS</label>

                <input
                    type="checkbox"
                    id="hitchExtra"
                    value="bola-enganche"
                    {...register("extras")} />
                <label htmlFor="hitchExtra">Con bola de enganche</label>
                
                <input
                    type="checkbox"
                    id="solarPanelsExtra"
                    value="paneles-solares"
                    {...register("extras")} />
                <label htmlFor="solarPanelsExtra">Con paneles solares</label>

                <input
                    type="checkbox"
                    id="petsExtra"
                    value="mascotas"
                    {...register("extras")} />
                <label htmlFor="petsExtra">Kit para mascotas</label>
            </fieldset>
            
            <label htmlFor="userComments">Comentarios y peticiones:</label>
            <textarea
                id="userComments"
                placeholder="Peticiones especiales, accesibilidad..."
                {...register("userComments")}></textarea>
            <button type="submit">Envía formulario</button>

        </form>
    )
}
