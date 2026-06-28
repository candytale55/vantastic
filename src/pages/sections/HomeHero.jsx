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
                <img className="hero-image" src={heroImage} alt="Van vintage Vantastic junto al mar" />
            </div>

            <div className="hero-content">
                <h2 className="hero-title">{yearsInBusiness} a&ntilde;os llevando gente a ning&uacute;n sitio en concreto.</h2>
                <p className="subheadline">Furgonetas vintage restauradas. Rec&oacute;gela aqu&iacute;. Devu&eacute;lvela donde quieras.</p>
                <Link to="/vans" className="cta-button cta-button-large btn-teal">Ver Toda la Flota</Link>
                <p className="brand-signature">Desde 1989. Familia. Carretera. Nada m&aacute;s.</p>
            </div>
        </section>
    )
}
