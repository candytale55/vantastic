import { Link } from 'react-router-dom'
import placeholder_image from '/src/assets/images/placeholder_image.jpg'

export default function HomeTestimonialsSocial() {
  return (
    <section className="home-testimonials-social-section">
      <h2>Esto no lo decimos nosotros.</h2>
      <div className="testimonials-grid">
        <blockquote className="testimonial-card">
          <p>"Llevaba dos años hablando de hacer este viaje. Al final lo hice solo, diez días por la costa hacia Portugal. Fue la primera vez en mucho tiempo que me olvidé del móvil de verdad. No sé si fue la furgoneta o la carretera. Creo que fue las dos cosas."</p>
          <footer>
            <span className="author-name">Andrés, 29</span>
            <span className="author-location">Madrid, España</span>
          </footer>
        </blockquote>
        <blockquote className="testimonial-card">
          <p>"On avait peur que ce soit compliqué. Au final, c'était le voyage le plus simple et le plus beau qu'on ait fait ensemble. On a récupéré le van à Barcelone et on l'a rendu à Lisbonne. Douze días. On en parle encore."</p>
          <footer>
            <span className="author-name">Claire & Thomas, 34 y 37</span>
            <span className="author-location">Lyon, Francia</span>
          </footer>
        </blockquote>
      </div>
      <div className="social-preview">
        <h3 className="social-preview-title">Nuestra comunidad en carretera</h3>
        <img src={placeholder_image} alt="Collage de fotos de la comunidad" className="community-collage-image" />
        <Link to="/community" className="cta-button-medium">Ver historias de viaje</Link>
      </div>
    </section>
  )
}
