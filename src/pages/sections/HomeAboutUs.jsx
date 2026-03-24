import placeholder_image from '/src/assets/images/placeholder_image.jpg'

export default function HomeAboutUs() {
    return (
        <section className="home-about-hook section-shell">
            <div className="about-layout">
                <div className="about-content">
                    <h2 className="about-title">Crecimos en una furgoneta. Abrimos esto para que tú puedas sentir lo mismo.</h2>
                    <p className="about-text">La historia de Vantastic! no es la de una empresa. Es la de dos familias que llevan la carretera en la sangre desde los años 60. Es la historia de cómo la libertad se convirtió en un negocio honesto.</p>
                </div>

                <div className="about-media">
                    <img
                        src={placeholder_image}
                        alt="Foto de los fundadores o taller Vantastic!"
                        className="about-image" />
                </div>
            </div>
        </section>
    )
}
