import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans.jsx'
import About from './pages/About.jsx'
import VanDetail from './pages/VanDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import Layout from './components/Layout.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={ <Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vandetail" element={<VanDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
