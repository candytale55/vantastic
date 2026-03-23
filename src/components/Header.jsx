import { NavLink } from 'react-router-dom'

export default function Header() {

  return (
    <header
      className="main-header mt-4 mx-4 flex flex-row items-center justify-between shrink-0">
      <NavLink
          to="/"
          className="navlink">
        <h1 className="brand-logo">Vantastic!</h1>
      </NavLink>
      
      <nav className="primary-nav">
        <NavLink
          to="vans"
          className="navlink cta-button">¡Alquila tu Van!</NavLink>
      </nav>


      </header>
  ) 
}
