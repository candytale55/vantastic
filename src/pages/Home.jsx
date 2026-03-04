import Hero from './sections/Hero.jsx'
import Fleet from './sections/Fleet.jsx'
import Promo from './sections/Promo.jsx'
import Newsletter from './sections/Newsletter.jsx'
import Social from './sections/Social.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Tú tienes el plan de viaje, nosotros tenemos la van perfecta.</h2>
      <p>Dale aventura a tu vida y súmate al movimiento vanlife. Renta la van ideal para convertir tu road trip en el viaje que estás imaginando.</p>
      <Link to="vans">Encuentra tu van</Link>
      <Hero />
      <Fleet />
      <Promo />
      <Newsletter />
      <Social />
    </div>
  )
}
