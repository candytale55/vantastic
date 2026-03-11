import { Link } from 'react-router-dom'

export default function HomeFleetPreview() {
    return (
        <section
            className="section"
            id="fleet-section">
            <h2>La Flota</h2>
            <h3>Tú tienes el plan de viaje, nosotros tenemos la van perfecta.</h3>
            <p>Dale aventura a tu vida y súmate al movimiento vanlife. Renta la van ideal para convertir tu road trip en el viaje que estás imaginando.</p>
            <Link to="vans">Ver toda la Flota</Link>
            <h4>Aquí van los 3 tipos de Vans</h4>
            {/* //TODO: Cambiar por componente */}
            <div className="fleet-gallery-container">
                <div>Cuadro 1</div>
                <div>Cuadro 2</div>
                <div>Cuadro 3</div>
            </div>
        </section>
    )
}
