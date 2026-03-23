import placeholder_image from '/src/assets/images/placeholder_image.jpg'

/* //TODO: This section is creepy */

export default function HomeForWhomIsThis() {

    const persona = [
        {
            title: 'Para quien necesita salir',
            alt: 'Viajero solo',
            text: 'Llevas tiempo hablando de ese viaje. Lo has pospuesto dos veces. Sabes que lo necesitas pero siempre hay algo. Una furgoneta vintage tiene una virtud que no tiene ningún hotel: te obliga a salir.',
        },
        {
            title: 'Para viajar de verdad',
            alt: 'Pareja viajera',
            text: 'Hay viajes que se recuerdan y viajes que te cambian. La diferencia no está en el destino. Está en cómo llegas. Catorce días, dos personas, una furgoneta y ningún sitio al que tener que llegar a tiempo.',
        },
        {
            title: 'Para mirar Europa despacio',
            alt: 'Viajero internacional',
            text: 'Europa no se ve desde una autopista ni desde la ventanilla de un tour. Se ve a ochenta por hora, con la ventana bajada, parando donde te apetece. Eso es lo que llevamos ofreciendo desde 1989.',
        },
    ]


    return (
        <section className="home-for-whom section-shell">
            <h2 className="section-title">Hay personas que necesitan llegar. Y hay personas que necesitan viajar.</h2>
            <p className="section-subtitle">Esta web es para las segundas.</p>
            <div className="for-whom-mobile-stack">
                <article className="persona-card">
                    <img src={placeholder_image} alt="Viajero solo" className="persona-image" />
                    <h3>Titulo 1</h3>
                    <p>Llevas tiempo hablando de ese viaje. Lo has pospuesto dos veces. Sabes que lo necesitas pero siempre hay algo. Una furgoneta vintage tiene una virtud que no tiene ningún hotel: te obliga a salir.</p>
                </article>
                <article className="persona-card">
                    <img src={placeholder_image} alt="Pareja viajera" className="persona-image" />
                    <h3>Título</h3>
                    <p>Hay viajes que se recuerdan y viajes que te cambian. La diferencia no está en el destino. Está en cómo llegas. Catorce días, dos personas, una furgoneta y ningún sitio al que tener que llegar a tiempo.</p>
                </article>
                <article className="persona-card">
                    <img src={placeholder_image} alt="Viajero internacional" className="persona-image" />
                    <h3>Título</h3>
                    <p>Europa no se ve desde una autopista ni desde la ventanilla de un tour. Se ve a ochenta por hora, con la ventana bajada, parando donde te apetece. Eso es lo que llevamos ofreciendo desde 1989.</p>
                </article>
            </div>
        </section>
    )
}
