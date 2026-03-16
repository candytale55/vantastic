import placeholder_image from '/src/assets/images/placeholder_image.jpg'


export default function VanPictures() {
  // Simulated hardcoded data for van pictures
  const pictures = [
    { src: placeholder_image, alt: "Foto" },
    { src: placeholder_image, alt: "Foto" },
    { src: placeholder_image, alt: "Foto" },
    { src: placeholder_image, alt: "Foto" },
    { src: placeholder_image, alt: "Foto" },
    { src: placeholder_image, alt: "Foto" },
    { src: placeholder_image, alt: "Foto" },
    { src: placeholder_image, alt: "Foto" },
  ];

  return (
    <div className="van-pictures-section">
      <h3>Galería de Fotos</h3>
      <div className="pictures-grid">
        {pictures.map((pic, index) => (
          <img
            key={index}
            src={pic.src}
            alt={pic.alt}
            className="van-gallery-image"
          />
        ))}
      </div>
      <p className="gallery-note">Cada van tiene su propio encanto único. Las fotos son representativas.</p>
    </div>
  )
}