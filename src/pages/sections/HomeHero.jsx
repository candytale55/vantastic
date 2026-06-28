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
                <p className="brand-signature">Desde 1989.</p>
                <h2 className="hero-title">{yearsInBusiness} a&ntilde;os llevando gente a ning&uacute;n sitio en concreto.</h2>
                <p className="subheadline"><span>Furgonetas vintage restauradas.</span> <span>Rec&oacute;gela aqu&iacute;.</span> <span>Devu&eacute;lvela donde quieras.</span></p>
                <Link to="/vans" className="cta-button cta-button-large btn-teal">Ver Toda la Flota</Link>
                
            </div>
        </section>
    )
}
