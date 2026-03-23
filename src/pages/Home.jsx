import HomeHero from './sections/HomeHero.jsx'
import HomePromoThreeReasons from './sections/HomePromoThreeReasons.jsx'
import HomeFleetPreview from './sections/HomeFleetPreview.jsx'
import HomeTestimonialsSocial from './sections/HomeTestimonialsSocial.jsx'
import HomeNewsletterSignup from './sections/HomeNewsletterSignup.jsx'
import HomeAboutUs from './sections/HomeAboutUs.jsx' 


export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomePromoThreeReasons />
      <HomeFleetPreview />
      <HomeNewsletterSignup />
      <HomeTestimonialsSocial />
      <HomeAboutUs />
    </main>
  )
}
