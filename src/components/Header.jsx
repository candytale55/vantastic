import { NavLink } from 'react-router-dom'

export default function Header() {

  return (
    <header className="main-header shrink-0 border-b">

      <div className="brand-logo-container">
        <NavLink
          to="/"
          className="navlink"><h1>Vantastic!</h1></NavLink>
      </div>

      <nav className="primary-nav">
        <NavLink
          to="vans"
          className="navlink cta-button">¡Alquila tu Van!</NavLink>
      </nav>


      </header>
  ) 
}
