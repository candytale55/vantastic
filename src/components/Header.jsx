// Cabecera global: muestra la marca y el acceso principal al catalogo de vans.
import { NavLink } from 'react-router-dom'

export default function Header() {

  return (
    <header
      className="main-header">
      <NavLink
          to="/"
          className="brand-link">
        <h1 className="brand-logo">Vantastic!</h1>
      </NavLink>
      
      <nav className="primary-nav">
        <NavLink
          to="vans"
          className="header-cta">¡Busca tu Van!</NavLink>
      </nav>
    </header>
  ) 
}
