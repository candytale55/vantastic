import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {

  return (
    <header>
      <NavLink to="/"><h1>Vantastic!</h1></NavLink>
      <nav>
        <NavLink
          to="about"
          className={({ isActive }) => (
            isActive ? "active" : "" )}
        >Sobre nosotros</NavLink>
        
        <NavLink
          to="vans"
          className={({ isActive }) => (
            isActive ? "active" : "")}
        >Vans</NavLink>
      </nav>
      </header>
  ) 
}
