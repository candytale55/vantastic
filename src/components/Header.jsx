import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {

  const isActiveStyle = {
    //TODO: Add the styling in the component css? and check if style is better than className or not
    fontWeight: "bold",
    color: "red",
  }

  return (
    <header>
      <NavLink to="/"><h1>Vantastic!</h1></NavLink>
      <nav>
        <NavLink
          to="about"
          style={({isActive})=> isActive ? isActiveStyle : null }
        >Sobre nosotros</NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => isActive ? isActiveStyle : null}
        >Vans</NavLink>
      </nav>
      </header>
  ) 
}
