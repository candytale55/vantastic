import { Routes, Route } from 'react-router-dom'
// Components
import Layout from './components/Layout.jsx'
// Pages
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import VanDetail from './pages/VanDetail.jsx'
import Vans from './pages/Vans.jsx'
import Community from './pages/Community.jsx'
import RoutesPage from './pages/RoutesPage.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import Legal from './pages/Legal.jsx'
import Privacy from './pages/Privacy.jsx'

import VanPictures from './pages/sections/VanPictures.jsx'
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
          <Route path="pictures" element={<VanPictures />} />
          <Route path="ratings" element={<VanRatings />} />
        </Route>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />

        <Route path="legal" element={<Legal />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
