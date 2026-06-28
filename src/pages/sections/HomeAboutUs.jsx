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
                    <h2 className="about-title">Crecimos en una furgoneta.</h2>
                    <p className="about-text"> Abrimos esto para que t&uacute; puedas sentir lo mismo. La historia de Vantastic! no es la de una empresa. Es la de dos familias que llevan la carretera en la sangre desde los a&ntilde;os 60.</p>
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
