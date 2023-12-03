import React, { useState } from 'react'
import "./NavBar.css"
import logo from "../Assets/otherwise_logo.jpg"

function NavBar({}) {
  

  
  return (
    <nav className='navbar-container'>
        <div className='logo-container'>
            <img className='logo' src={logo} alt='otherwise_logo' />
        </div>       
        
    </nav>
  )
}

export default NavBar