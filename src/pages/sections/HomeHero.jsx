import placeholder_image from '/src/assets/images/placeholder_image.jpg'
import { Link } from 'react-router-dom'
import { getYearsSince } from '../../utils/dateUtils.js'

export default function HomeHero() {

    /* //TODO: Move to a file that manage the bussiness data? */
    const startYear = 1989;
    const yearsInBusiness = getYearsSince(startYear);


    return (
        <section className="home-hero-section section-shell">
            <div className="hero-background-image">
                <img className="placeholder-image" src={placeholder_image} alt="placeholder image" />
            </div>

            <div class="hero-content">
                <h2>{ yearsInBusiness } años llevando gente a ningún sitio en concreto.</h2>
                <p class="subheadline">Furgonetas vintage restauradas. Recógela aquí. Devuélvela donde quieras.</p>
                <Link to="/vans" class="cta-button-large">Encuentra tu furgoneta</Link>
                <p class="brand-signature">Valencia, desde 1989. Familia. Carretera. Nada más.</p>
            </div>
        </section>
    )
}
