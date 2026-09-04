import React from 'react'
import "./NavbarStyle.css"

const Navbar = () => {
  return (
    <nav>
      <h2 className="logo">ACE</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
