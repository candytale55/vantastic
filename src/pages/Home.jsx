import HomeHero from './sections/HomeHero.jsx'
import HomeFleetPreview from './sections/HomeFleetPreview.jsx'
import HomePromoThreeReasons from './sections/HomePromoThreeReasons.jsx'
import HomeNewsletterSignup from './sections/HomeNewsletterSignup.jsx'
import HomeTestimonialsSocial from './sections/HomeTestimonialsSocial.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeFleetPreview />
      <HomePromoThreeReasons />
      <HomeNewsletterSignup />
      <HomeTestimonialsSocial />
    </main>
  )
}
