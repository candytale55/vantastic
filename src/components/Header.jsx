import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <header>
      <h1>Vantastic!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">Acerca</Link>
        <Link to="vans">Vans</Link>
      </nav>
      </header>
  ) 
}
