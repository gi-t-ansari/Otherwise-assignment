import React, { useState } from 'react'
import "./Home.css"
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom'


function Home({}) {
  
  return (
    <div className='home-container'>
        <NavBar />
        <div className='home-body'>
            <h1>We're <span className='otherwise-text'>Otherwise.</span></h1>
            <p>Write your blog now</p>
            <Link to="/login"><button id='login-button'>Log In</button></Link>
            <Link to="/signup"><button id='signup-button'>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Home