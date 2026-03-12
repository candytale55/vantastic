import placeholder_image from '/src/assets/images/placeholder_image.jpg'
import { Link } from 'react-router-dom'

export default function HomeHero() {
    return (
        <section className="home-hero-section">

            <div className="hero-background-video">
                {/* //TODO: Video or no Video? */}
                {/*                 <video autoplay muted loop playsinline class="video-element">
                    <source src="/path/to/your/vanlife-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <img className="placeholder-image" src={placeholder_image} alt="placeholder image" />
            </div>

            <div class="hero-content">
                <h1>Treinta y cinco años llevando gente a ningún sitio en concreto.</h1>
                <p class="subheadline">Furgonetas vintage restauradas. Recógela aquí. Devuélvela donde quieras.</p>
                <Link to="/vans" class="cta-button-large">Encuentra tu furgoneta</Link>
                <p class="brand-signature">Valencia, desde 1989. Familia. Carretera. Nada más.</p>
            </div>
            
           
        </section>
    )
}
