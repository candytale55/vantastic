import placeholder_image from '/src/assets/images/placeholder_image.jpg'


export default function VanPictures() {
  const pictures = [
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
    { src: placeholder_image, alt: 'Foto de galeria Vantastic' },
  ]

  return (
    <section className="van-pictures-section section-shell" id="galeria">
      <h2 className="section-title">Galer&iacute;a</h2>
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
    </section>
  )
}
