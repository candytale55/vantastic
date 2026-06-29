// Home publica: compone las secciones principales de marca, flota, galeria y contacto.
import HomeHero from './sections/HomeHero.jsx'
import HomeFleetPreview from './sections/HomeFleetPreview.jsx'
import HomeTestimonialsSocial from './sections/HomeTestimonialsSocial.jsx'
import HomeNewsletterSignup from './sections/HomeNewsletterSignup.jsx'
import HomeAboutUs from './sections/HomeAboutUs.jsx' 
import HomeGaleria from './sections/HomeGaleria.jsx'


export default function Home() {
  return (
    <main className="home-page">
      <HomeHero />
      <HomeFleetPreview />
      <HomeGaleria />
      <HomeNewsletterSignup />
      <HomeAboutUs />
      <HomeTestimonialsSocial />
    </main>
  )
}
