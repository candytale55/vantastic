import heroImage from '/src/assets/images/ocean-breeze-promo.png'
import { Link } from 'react-router-dom'
import { getYearsSince } from '../../utils/dateUtils.js'

export default function HomeHero() {

    /* //TODO: Move to a file that manage the bussiness data? */
    const startYear = 1989;
    const yearsInBusiness = getYearsSince(startYear);


    return (
        <section
            className="home-hero section-shell">
            <div className="hero-media">
                <img className="hero-image" src={heroImage} alt="placeholder image" />
            </div>

            <div className="hero-content">
                <h2 className="hero-title">{ yearsInBusiness } años llevando gente a ningún sitio en concreto.</h2>
                <p className="subheadline">Furgonetas vintage restauradas. Recógela aquí. Devuélvela donde quieras.</p>
                <Link to="/vans" className="cta-button cta-button-large">Encuentra tu furgoneta</Link>
                <p className="brand-signature">Valencia, desde 1989. Familia. Carretera. Nada más.</p>
            </div>
        </section>
    )
}
