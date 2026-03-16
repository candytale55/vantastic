import { NavLink } from 'react-router-dom'

export default function Header() {

  return (
    <header className="main-header">

      <div className="brand-logo-container">
        <NavLink to="/"><h1>Vantastic!</h1></NavLink>
      </div>

      <nav className="primary-nav">
        <NavLink to="vans" className="cta-button">¡Alquila tu Van!</NavLink>
      </nav>


      </header>
  ) 
}
