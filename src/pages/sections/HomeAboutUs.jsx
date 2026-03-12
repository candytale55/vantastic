import { Link } from 'react-router-dom'
import placeholder_image from '/src/assets/images/placeholder_image.jpg'

export default function HomeAboutUs() {
    return (
        <section className="home-about-hook-section">
            <div className="about-hook-content">
                <h2>Crecimos en una furgoneta. Abrimos esto para que tú puedas sentir lo mismo.</h2>
                <p>La historia de Vantastic! no es la de una empresa. Es la de dos familias que llevan la carretera en la sangre desde los años 60. Es la historia de cómo la libertad se convirtió en un negocio honesto.</p>
                <Link to="/about" className="cta-button-large">Nuestra historia</Link>
            </div>
            <div className="about-image-home">
                <img src={placeholder_image} alt="Foto de los fundadores o taller Vantastic!" />
            </div>
        </section>
    )
}
