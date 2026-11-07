// Galeria visual de la home: muestra imagenes de la experiencia Vantastic.
import { Camera } from 'lucide-react'
const firstImage = '/images/surfing-pic.png'
const secondImage = '/images/vanlife-meeting.png'
const thirdImage = '/images/top-of-the-world-pic.jfif'
const fourthImage = '/images/van-roadtrip.avif'
const fifthImage = '/images/orange-dream-promo.png'
const sixthImage = '/images/community-pic.png'


export default function HomeGaleria() {
  const pictures = [
    { src: firstImage, alt: 'Foto de galeria Vantastic' },
    { src: secondImage, alt: 'Foto de galeria Vantastic' },
    { src: thirdImage, alt: 'Foto de galeria Vantastic' },
    { src: fourthImage, alt: 'Foto de galeria Vantastic' },
    { src: fifthImage, alt: 'Foto de galeria Vantastic' },
    { src: sixthImage, alt: 'Foto de galeria Vantastic' },
  ]

  return (
    <section className="home-galeria-section" id="galeria">
      <div className="home-galeria-inner home-feature-section-inner section-shell">
        <div className="home-galeria-heading home-feature-section-heading">
          <div className="home-galeria-icon home-section-icon" aria-hidden="true">
            <Camera />
          </div>
          <h2 className="section-title">Galer&iacute;a</h2>
          <p className="home-galeria-subtitle">Momentos de carretera, paradas improvisadas y vans con historia.</p>
        </div>

        <div className="pictures-grid">
          {pictures.map((pic, index) => (
            <div className="van-gallery-frame" key={index}>
              <img
                src={pic.src}
                alt={pic.alt}
                className="van-gallery-image"
              />
            </div>
          ))}
        </div>

        <a href="#galeria" className="cta-button-large btn-yellow home-galeria-cta">
          S&iacute;guenos en redes
        </a>
      </div>
    </section>
  )
}
