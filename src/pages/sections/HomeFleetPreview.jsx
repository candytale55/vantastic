import { Link } from 'react-router-dom'
import placeholder_image from '/src/assets/images/placeholder_image.jpg'

export default function HomeFleetPreview() {
    return (
        <section
            className="home-fleet-preview section-shell"
            id="fleet-section">
            <h2 className="section-title">No todas las furgonetas son iguales. Tampoco todos los viajes.</h2>
            <p className="section-subtitle">Tres formas de viajar. Una sola manera de hacerlo bien.</p>
            <div className="fleet-type-cards-grid">
                <Link to="/vans?type=esencial" className="fleet-type-card">
                    <img src={placeholder_image} alt="Furgoneta tipo Esencial" className="card-image" />
                    <h3>Esencial</h3>
                    <p>Para los que prefieren llegar ligeros. Lo necesario está, lo superfluo se queda en casa.</p>
                    <span className="cta-button-small">Ver furgonetas Esencial →</span>
                </Link>
                <Link to="/vans?type=viajera" className="fleet-type-card">
                    <img src={placeholder_image} alt="Furgoneta tipo Viajera" className="card-image" />
                    <h3>Viajera</h3>
                    <p>Preparada para viajes largos y rutas mixtas. La que lleva parejas al Algarve y solitarios hasta el Pirineo.</p>
                    <span className="cta-button-small">Ver furgonetas Viajera →</span>
                </Link>
                <Link
                    to="/vans?type=singular" className="fleet-type-card">
                    <img
                        src={placeholder_image}
                        alt="Furgoneta tipo Singular" className="card-image" />
                    <h3>Singular</h3>
                    <p>No son las más caras. Son las más especiales. Pocas unidades, restauración excepcional.</p>
                    <span className="cta-button-small">Ver furgonetas Singular →</span>
                </Link>
            </div>

            <Link
                to="/vans"
                className="cta-button-large">
                Ver toda la flota
            </Link>
        </section>
    )
}
