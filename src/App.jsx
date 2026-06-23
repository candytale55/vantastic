import { Routes, Route } from 'react-router-dom'
// Components
import Layout from './components/Layout.jsx'
// Pages
import About from '../docs/old/plan/About.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import VanDetail from './pages/VanDetail.jsx'
import Vans from './pages/Vans.jsx'
import Community from '../docs/old/plan/Community.jsx'
import RoutesPage from '../docs/old/plan/RoutesPage.jsx'
import FAQ from '../docs/old/plan/FAQ.jsx'
import Contact from '../docs/old/plan/Contact.jsx'
import Legal from '../docs/old/plan/Legal.jsx'
import Privacy from '../docs/old/plan/Privacy.jsx'

import VanRatings from './pages/sections/VanRatings.jsx'
import VanSpecs from './pages/sections/VanSpecs.jsx'

// Styles
import './App.css'


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="community" element={<Community />} />
        <Route path="routes" element={<RoutesPage />} />
        <Route path="vans/:id" element={<VanDetail />}>
          <Route index element={<VanSpecs />} />
          <Route path="specs" element={<VanSpecs />} />
          <Route path="ratings" element={<VanRatings />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
