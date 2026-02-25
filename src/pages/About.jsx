import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <div>
        <h2>¡No más viajes apretados como sardinas! Puedes relajarte en una de nuestras vans.</h2>
        <p>Nuestra misión es hacer que tu road trip realmente cobre vida, ayudándote a encontrar la van perfecta para viajar. Todas nuestras vans se revisan y recertifican antes de cada salida, para que puedas arrancar sin preocupaciones y disfrutar el camino 😉.</p>
        <p>Nuestro equipo está formado por vanlife fans que conocen de primera mano la magia de recorrer el mundo sobre 4 ruedas.</p>
      </div>
      <div>
        <h2>Tu destino te espera.<br />Tu van está lista.</h2>
        <Link to="/vans">Explora nuestras vans</Link>
      </div>
    </div>
  )
}
