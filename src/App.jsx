import { Routes, Route } from 'react-router-dom'
// Components
import Layout from './components/Layout.jsx'
// Pages
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import VanDetail from './pages/VanDetail.jsx'
import Vans from './pages/Vans.jsx'

import VanRatings from './pages/sections/VanRatings.jsx'
import VanSpecs from './pages/sections/VanSpecs.jsx'


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="vans" element={<Vans />} />
        {/* Van detail keeps the main van layout stable while nested routes swap the secondary panel. */}
        <Route path="vans/:id" element={<VanDetail />}>
          <Route index element={<VanSpecs />} />
          <Route path="specs" element={<VanSpecs />} />
          <Route path="ratings" element={<VanRatings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
