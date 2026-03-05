import { NavLink } from 'react-router-dom'
  
export default function Header() {

  return (
    <header>

      <NavLink to="/"><h1>Vantastic!</h1></NavLink>
      <nav>
        <NavLink 
          to="about"
        >Nuestra historia</NavLink>
        
        <NavLink
          to="home"
        ><a
          href="#social-section"
        >La Flota</a></NavLink>
        

        <a
          href="#social-section"
        >Red Social</a>

      </nav>

      {/* // TODO: Este botón no hace nada */}
      <button className="cta">Botón CTA</button>
      </header>
  ) 
}
