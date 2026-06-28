import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { Van } from 'lucide-react'
import useFetch from '../../hooks/useFetch.jsx'

// Shows the three fleet categories on the home page with one random van image per category.
export default function HomeFleetPreview() {
    const { data, loading } = useFetch("/api/vans");

    const randomFleetImages = useMemo(() => {
        const vans = data?.vans ?? [];

        function getRandomVanByType(type) {
            const matchingVans = vans.filter((van) => van.type === type);
            return matchingVans[Math.floor(Math.random() * matchingVans.length)];
        }

        return {
            esencial: getRandomVanByType("esencial"),
            viajera: getRandomVanByType("viajera"),
            singular: getRandomVanByType("singular"),
        };
    }, [data]);

    function renderFleetImage(van, fallbackAlt) {
        if (loading || !van) {
            return <p className="card-image">cargando</p>;
        }

        return (
            <img
                src={van.imageUrl}
                alt={van.name ?? fallbackAlt}
                className="card-image" />
        );
    }

    return (
        <section
            className="home-fleet-preview section-shell"
            id="fleet-section">
            <div className="fleet-preview-heading">
                <div className="home-section-icon" aria-hidden="true">
                    <Van />
                </div>
                <h2 className="section-title">La Flota</h2>
                <p className="section-subtitle">No todas las furgonetas son iguales. Tampoco todos los viajes. Tres formas de viajar.</p>
            </div>
            <div className="fleet-type-cards-grid">
                <Link to="/vans?type=esencial" className="fleet-type-card">
                    {renderFleetImage(randomFleetImages.esencial, "Furgoneta tipo Esencial")}
                    <h3>Esencial</h3>
                    <p>Para los que prefieren llegar ligeros. Lo necesario está, lo superfluo se queda en casa.</p>
                    <span className="cta-button-small btn-yellow">Esencial →</span>
                </Link>
                <Link to="/vans?type=viajera" className="fleet-type-card">
                    {renderFleetImage(randomFleetImages.viajera, "Furgoneta tipo Viajera")}
                    <h3>Viajera</h3>
                    <p>Preparada para viajes largos y rutas mixtas. La que lleva parejas al Algarve y solitarios hasta el Pirineo.</p>
                    <span className="cta-button-small btn-teal">Viajera →</span>
                </Link>
                <Link
                    to="/vans?type=singular" className="fleet-type-card">
                    {renderFleetImage(randomFleetImages.singular, "Furgoneta tipo Singular")}
                    <h3>Singular</h3>
                    <p>No son las más caras. Son las más especiales. Pocas unidades, restauración excepcional.</p>
                    <span className="cta-button-small btn-pink">Singular →</span>
                </Link>
            </div>


        </section>
    )
}
