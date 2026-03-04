import { Link } from 'react-router-dom'

export default function Fleet() {
    return (
        <section className="section" id="fleet-section">
            <h2>La Flota</h2>
            <h3>Tú tienes el plan de viaje, nosotros tenemos la van perfecta.</h3>
            <p>Dale aventura a tu vida y súmate al movimiento vanlife. Renta la van ideal para convertir tu road trip en el viaje que estás imaginando.</p>
            <Link to="vans">Encuentra tu van</Link>
        </section>
    )
}
