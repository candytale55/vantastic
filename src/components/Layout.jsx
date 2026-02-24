import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <h1>I am Layout</h1>
      <Outlet>

      </Outlet>
      <Footer />
    </>
  )
}
