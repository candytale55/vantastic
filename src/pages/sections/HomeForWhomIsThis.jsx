import placeholder_image from '/src/assets/images/placeholder_image.jpg'

/* //TODO: This section is creepy */

export default function HomeForWhomIsThis() {
  return (
      <section class="home-for-whom-section border">
          <h2>Hay personas que necesitan llegar. Y hay personas que necesitan viajar.</h2>
          <p class="subtitle">Esta web es para las segundas.</p>
          <div class="personas-container">
              <div class="persona-block">
                  <img src={placeholder_image} alt="Viajero solo" class="persona-image" />
                  <h3>El viajero solo</h3>
                  <p>Llevas tiempo hablando de ese viaje. Lo has pospuesto dos veces. Sabes que lo necesitas pero siempre hay algo. Una furgoneta vintage tiene una virtud que no tiene ningún hotel: te obliga a salir.</p>
              </div>
              <div class="persona-block">
                  <img src={placeholder_image} alt="Pareja viajera" class="persona-image" />
                  <h3>La pareja</h3>
                  <p>Hay viajes que se recuerdan y viajes que te cambian. La diferencia no está en el destino. Está en cómo llegas. Catorce días, dos personas, una furgoneta y ningún sitio al que tener que llegar a tiempo.</p>
              </div>
              <div class="persona-block">
                  <img src={placeholder_image} alt="Viajero internacional" class="persona-image" />
                  <h3>El viajero que viene de lejos</h3>
                  <p>Europa no se ve desde una autopista ni desde la ventanilla de un tour. Se ve a ochenta por hora, con la ventana bajada, parando donde te apetece. Eso es lo que llevamos ofreciendo desde 1989.</p>
              </div>
          </div>
      </section>
  )
}
