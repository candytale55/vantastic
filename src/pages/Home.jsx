import HomeHero from './sections/HomeHero.jsx'
import HomePromoThreeReasons from './sections/HomePromoThreeReasons.jsx'
import HomeFleetPreview from './sections/HomeFleetPreview.jsx'
import HomeForWhomIsThis from './sections/HomeForWhomIsThis.jsx'
import HomeTestimonialsSocial from './sections/HomeTestimonialsSocial.jsx'
import HomeNewsletterSignup from './sections/HomeNewsletterSignup.jsx'
import HomeAboutUs from './sections/HomeAboutUs.jsx' 


export default function Home() {
  return (
    <main>
      <h1 class="text-4xl text-red-500 font-bold">
        Tailwind Test
      </h1>
      <HomeHero />
      <HomePromoThreeReasons />
      <HomeFleetPreview />
      <HomeForWhomIsThis />
      <HomeNewsletterSignup />
      <HomeTestimonialsSocial />
      <HomeAboutUs />
    </main>
  )
}
