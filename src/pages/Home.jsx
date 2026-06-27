import HomeHero from './sections/HomeHero.jsx'
import HomeFleetPreview from './sections/HomeFleetPreview.jsx'
import HomeTestimonialsSocial from './sections/HomeTestimonialsSocial.jsx'
import HomeNewsletterSignup from './sections/HomeNewsletterSignup.jsx'
import HomeAboutUs from './sections/HomeAboutUs.jsx' 
import VanPictures from './sections/VanPictures.jsx'


export default function Home() {
  return (
    <main className="home-page">
      <HomeHero />
      <HomeFleetPreview />
      <VanPictures />
      <HomeNewsletterSignup />
      <HomeAboutUs />
      <HomeTestimonialsSocial />
    </main>
  )
}
