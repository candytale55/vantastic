// Seccion social de la home: combina testimonios de clientes y senales de comunidad.
import { ScanFace } from 'lucide-react'

export default function HomeTestimonialsSocial() {
  return (
    <section className="home-testimonials-social section-shell" id="testimonials-social">
      <div className="home-section-icon testimonials-icon" aria-hidden="true">
        <ScanFace />
      </div>

      <div className="testimonials-social-layout">
        <div className="testimonials-column">
          <h2 className="section-title">Esto no lo decimos nosotros.</h2>

          <div className="testimonials-grid">
            <blockquote className="testimonial-card">
              <p>"Llevaba dos a&ntilde;os hablando de hacer este viaje. Al final lo hice solo, diez d&iacute;as por la costa hacia Portugal. Fue la primera vez en mucho tiempo que me olvid&eacute; del m&oacute;vil de verdad. No s&eacute; si fue la furgoneta o la carretera. Creo que fue las dos cosas."</p>
              <footer className="testimonial-footer">
                <span className="author-name">Andr&eacute;s, 29</span>
                <span className="author-location">Madrid, Espa&ntilde;a</span>
              </footer>
            </blockquote>

            <blockquote className="testimonial-card">
              <p>"On avait peur que ce soit compliqu&eacute;. Au final, c'&eacute;tait le voyage le plus simple et le plus beau qu'on ait fait ensemble. On a r&eacute;cup&eacute;r&eacute; le van &agrave; Barcelone et on l'a rendu &agrave; Lisbonne. Douze d&iacute;as. On en parle encore."</p>
              <footer className="testimonial-footer">
                <span className="author-name">Claire & Thomas, 34 y 37</span>
                <span className="author-location">Lyon, Francia</span>
              </footer>
            </blockquote>

            {/* <blockquote className="testimonial-card">
              <p>"We picked up the van in Valencia with no real plan, just a map and five free days. By the second night, parked near the sea, it felt like the trip had been waiting for us all along."</p>
              <footer className="testimonial-footer">
                <span className="author-name">Maya, 31</span>
                <span className="author-location">Bristol, United Kingdom</span>
              </footer>
            </blockquote> */}
          </div>
        </div>
      </div>
    </section>
  )
}
