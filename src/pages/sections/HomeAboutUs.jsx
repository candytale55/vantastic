import { Compass } from 'lucide-react'
import aboutUsImage from '/src/assets/images/owners-pic.png'

export default function HomeAboutUs() {
    return (
        <section className="home-about-hook section-shell" id="nuestra-historia">
            <div className="home-section-icon" aria-hidden="true">
                <Compass />
            </div>

            <div className="about-layout">
                <div className="about-content">
                    <h2 className="about-title">Crecimos en una furgoneta. Abrimos esto para que t&uacute; puedas sentir lo mismo.</h2>
                    <p className="about-text">La historia de Vantastic! no es la de una empresa. Es la de dos familias que llevan la carretera en la sangre desde los a&ntilde;os 60. Es la historia de c&oacute;mo la libertad se convirti&oacute; en un negocio honesto.</p>
                </div>

                <div className="about-media">
                    <img
                        src={aboutUsImage}
                        alt="Foto de los fundadores o taller Vantastic!"
                        className="about-image" />
                </div>
            </div>
        </section>
    )
}
