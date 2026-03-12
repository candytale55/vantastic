import { Link } from 'react-router-dom'
import placeholder_image from '/src/assets/images/placeholder_image.jpg'

export default function HomeFleetPreview() {
    return (
        <section
            className="home-fleet-preview-section"
            id="fleet-section">
            <h2>No todas las furgonetas son iguales. Tampoco todos los viajes.</h2>
            <p class="subtitle">Tres formas de viajar. Una sola manera de hacerlo bien.</p>
            <div class="fleet-type-cards-container">
                <Link to="/vans?type=simple" class="fleet-type-card">
                    <img src={placeholder_image} alt="Furgoneta tipo Esencial" class="card-image" />
                    <h3>Esencial</h3>
                    <p>Para los que prefieren llegar ligeros. Lo necesario está, lo superfluo se queda en casa.</p>
                    <span class="cta-small">Ver furgonetas Esencial →</span>
                </Link>
                <Link to="/vans?type=rugged" class="fleet-type-card">
                    <img src={placeholder_image} alt="Furgoneta tipo Viajera" class="card-image" />
                    <h3>Viajera</h3>
                    <p>Preparada para viajes largos y rutas mixtas. La que lleva parejas al Algarve y solitarios hasta el Pirineo.</p>
                    <span class="cta-small">Ver furgonetas Viajera →</span>
                </Link>
                <Link to="/vans?type=luxury" class="fleet-type-card">
                    <img src={placeholder_image} alt="Furgoneta tipo Singular" class="card-image" />
                    <h3>Singular</h3>
                    <p>No son las más caras. Son las más especiales. Pocas unidades, restauración excepcional.</p>
                    <span class="cta-small">Ver furgonetas Singular →</span>
                </Link>
            </div>
            <Link to="/vans" class="cta-button-large">Ver toda la flota</Link>
        </section>
    )
}
