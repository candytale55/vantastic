import { useRef } from 'react'

export default function BookingForm() {

    const userNameRef = useRef(null);
    const userEmailRef = useRef(null);;

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const name = userNameRef.current.value;
        const email = userEmailRef.current.value;

        if (name && email) {
            console.log(`Van alqulada a ${name} con email ${email}`); //TODO: Eliminar despues de pruebas
            alert(`¡Gracias ${name}! Nos pondremos en contacto con ${email}`);//TODO: Eliminar despues de pruebas
        }
    }

  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
              type="text"
              id="name"
              ref={userNameRef}
              required />
          
          <label htmlFor="email">Email:</label>
          <input
              type="email"
              id="email"
              ref={userEmailRef}
              required />
          <button type="submit">Envía formulario</button>
     </form>
  )
}
