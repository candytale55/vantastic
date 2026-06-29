// Hero de la home: presenta la propuesta de Vantastic y lleva al usuario al catalogo.
import heroImage from '/src/assets/images/ocean-breeze-promo.png'
import { Link } from 'react-router-dom'
import { getYearsSince } from '../../utils/dateUtils.js'

export default function HomeHero() {
    // Business age is derived so the hero copy stays current each year.
    const startYear = 1989;
    const yearsInBusiness = getYearsSince(startYear);

    return (
        <section className="home-hero section-shell">
            <div className="hero-media">
                <p className="brand-signature">Desde 1989</p>
                <img className="hero-image" src={heroImage} alt="Van vintage Vantastic junto al mar" />
            </div>

            <div className="hero-content">
                <h2 className="hero-title">Furgonetas vintage restauradas.</h2>
                <p className="subheadline">{yearsInBusiness} a&ntilde;os llevando gente a ning&uacute;n sitio en concreto.</p>
                <Link to="/vans" className="cta-button btn-teal hero-cta">Ver Toda la Flota</Link>
            </div>
        </section>
    )
}
