import { NavLink } from 'react-router-dom'

export default function Header() {

  return (
    <header className="main-header">

      <div className="brand-logo-container">
        <NavLink to="/"><h1>Vantastic!</h1></NavLink>
      </div>

      <nav className="primary-nav">
        <NavLink to="about">Nuestra historia</NavLink>
        <NavLink to="vans">Vans</NavLink>
        <NavLink to="community">La comunidad</NavLink>
        <NavLink to="routes">Rutas</NavLink>
      </nav>

      {/* // TODO: Este botón no hace nada */}
      <button className="cta-button">Alquila tu van</button>
      </header>
  ) 
}
