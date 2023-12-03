import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Dashboard.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import logo from "../Assets/otherwise_logo.jpg"

function Dashboard() {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    const logOut = () => {
        localStorage.clear()
        navigate("/")
    }


  return (
    <div>
        <nav className='navbar-container'>
          <div className='logo-container'>
            <Link to="/"><img className='logo' src={logo} alt='logo' /></Link>
          </div>            
          <div className='user' >
            <AccountCircleIcon />
            <span>{storedUserData.name}</span>
            <button onClick={logOut} id='logout-button'>Logout</button>
          </div>
        </nav>
        <div>
          <h1 style={{textAlign: "center"}}>
            Start writing blogs
          </h1>
        </div>
        
    </div>
  )
}

export default Dashboard