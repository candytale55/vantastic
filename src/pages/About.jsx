import placeholder_image from '/src/assets/images/placeholder_image.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main class="about-page-main">
      <section class="about-hero">
        <h1>No abrimos esto para hacer negocio. Lo abrimos porque no sabíamos vivir de otra manera.</h1>
        <p class="subtitle">La historia de Vantastic! no es la de una empresa. Es la de dos familias que llevan la carretera en la sangre desde los años 60.</p>
      </section>

      <section class="about-origin-story">
        <h2>El origen: crecer en una furgoneta</h2>
        <div class="story-content">
          <img src={placeholder_image} alt="Antigua furgoneta familiar" class="story-image" />
          <p>Mikel nació en el País Vasco pero no conoció una dirección fija hasta los 30 años. Sus padres fueron parte de la primera ola del movimiento hippie europeo: artesanos, músicos y viajeros que recorrieron en furgoneta Alemania, Francia, Portugal y Marruecos durante los años 60 y 70. Mikel creció durmiendo en literas improvisadas en VW Combis, aprendiendo a cambiar un carburador antes de aprender a montar en bicicleta. Con 19 años ya viajaba solo por Europa con su propia furgoneta. En los 80 conoció a Lola en un camping cerca de Lisboa. Juntos decidieron echar raíces en Valencia —el clima, el mar, la luz— pero sin abandonar la carretera. En 1989 abrieron el negocio familiar que hoy sigue funcionando con sus hijos.</p>
          <p>Lola nació en Oporto en el seno de una familia portuguesa de artistas. Su madre era pintora y su padre tocaba guitarra en bares de toda Europa. Con 15 años ya cruzaba fronteras en la furgoneta familiar. Aprendió a cocinar con lo que había, a navegar con mapas de papel y a relacionarse con personas de cualquier idioma. Con 22 años llegó a Valencia en un VW T2 naranja desvencijado y decidió que esa ciudad era lo más parecido a casa que había encontrado. Conoció a Mikel semanas después. El negocio fue idea de los dos, but the visible face, the one who built the community and designed the customer experience, was always her.</p>
        </div>
      </section>

      <section class="about-workshop">
        <h2>Cada furgoneta pasa por nuestras manos antes de pasar por las tuyas.</h2>
        <div class="workshop-content">
          <p>Nuestro taller en Valencia es el corazón de Vantastic! Aquí es donde cada furgoneta vintage recibe una segunda vida. No se trata solo de reparar; se trata de restaurar con el respeto que se merece un pedazo de historia. Revisamos el motor a fondo, la carrocería, el sistema eléctrico y el interior, manteniendo siempre la esencia original del vehículo. Lo que ves en nuestras furgonetas no es una decoración retro; es la autenticidad de un vehículo que ha sido cuidadosamente mantenido por manos expertas.</p>
          <div class="workshop-gallery">
            <img src={placeholder_image} alt="Interior del taller Vantastic!" class="gallery-image" />
            <img src={placeholder_image} alt="Mecánico trabajando en furgoneta" class="gallery-image" />
          </div>
        </div>
        <p class="quote">"Esta furgoneta ha visto más amaneceres que tú y yo juntos." <span class="quote-author">— Mikel Arteaga, Fundador</span></p>
      </section>

      <section class="about-team">
        <h2>Somos poca gente. Pero conocemos cada tornillo de cada furgoneta.</h2>
        <div class="team-members">
          <div class="team-member-card">
            <img src={placeholder_image} alt="Mikel Arteaga" class="member-photo" />
            <h3>Mikel Arteaga</h3>
            <p>Mecánico jefe y alma de la empresa. Conoce a cada vehículo por nombre. Habla con los clientes cuando tienen dudas técnicas o quieren consejo sobre rutas.</p>
          </div>
          <div class="team-member-card">
            <img src={placeholder_image} alt="Lola Ferreira" class="member-photo" />
            <h3>Lola Ferreira</h3>
            <p>Directora de experiencia del cliente y voz de la marca. Gestiona la comunidad, escribe el contenido y recibe a los clientes con un mapa marcado a mano y un café.</p>
          </div>
        </div>
        <Link to="/vans" class="cta-button-large">Explora nuestras vans</Link>
      </section>
    </main>
  )
}
