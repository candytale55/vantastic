import { NavLink } from 'react-router-dom'

//TODO: Make the links La Flota and Red Social direct to inner sections
   
export default function Header() {

  return (
    <header>
      <NavLink to="/"><h1>Vantastic!</h1></NavLink>
      <nav>
        <NavLink 
          to="about"
        >Nuestra historia</NavLink>
        
        <NavLink
          to="vans"
        >La Flota</NavLink>

        <NavLink
          to="vans"
        >Red Social</NavLink>
      </nav>

      <button className="cta">Botón CTA</button>
      </header>
  ) 
}
