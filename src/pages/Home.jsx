import Hero from './sections/Hero.jsx'
import Fleet from './sections/Fleet.jsx'
import Promo from './sections/Promo.jsx'
import Newsletter from './sections/Newsletter.jsx'
import Social from './sections/Social.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Hero />
      <Fleet />
      <Promo />
      <Newsletter />
      <Social />
    </main>
  )
}
