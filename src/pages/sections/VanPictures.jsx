import { Camera } from 'lucide-react'
import placeholder_image from '/src/assets/images/placeholder_image.jpg'


export default function VanPictures() {
  const pictures = [
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
  ]

  return (
    <section className="van-pictures-section" id="galeria">
      <div className="van-pictures-inner section-shell">
        <div className="van-pictures-heading">
          <div className="van-pictures-icon" aria-hidden="true">
            <Camera />
          </div>
          <h2 className="section-title">Galer&iacute;a</h2>
          <p className="van-pictures-subtitle">Momentos de carretera, paradas improvisadas y vans con historia.</p>
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

        <a href="#footer" className="cta-button-large btn-yellow van-pictures-cta">
          S&iacute;guenos en redes
        </a>
      </div>
    </section>
  )
}
