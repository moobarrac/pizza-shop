import React from 'react'
import PizzaLogo from '../assests/pizza-logo.png'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts} from 'react-icons/ai'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={PizzaLogo} alt='Pizza' />
      </div>
      <div className="navbar-name">
        Pizza Shop
      </div>
      <div className={`navbar-hidden ${showNavbar? 'show' : 'hide'}`}>
        <button className="close" onClick={() => setShowNavbar(!showNavbar)}>
          <FaTimes/>
        </button>
        <Link to="/" onClick={() => setShowNavbar(false)} >Home</Link>
        <Link to="/menu" onClick={() => setShowNavbar(false)} >Menu</Link>
        <Link to="/about" onClick={() => setShowNavbar(false)}>About</Link>
        <Link to="/contact" onClick={() => setShowNavbar(false)}>Contact</Link>
      </div>
      <div className="navbar-links">
        <div className="icons"><AiOutlineHome/></div><Link to="/" >Home</Link>
        <div className="icons"><AiOutlineHome/></div><Link to="/menu" >Menu</Link>
        <div className="icons"><AiOutlineInfoCircle/></div><Link to="/about">About</Link>
        <div className="icons"><AiOutlineContacts/></div><Link to="/contact">Contact</Link>
      </div>
      <button className="navbar-btn" onClick={() => setShowNavbar(!showNavbar)} >
        <FaBars/>
      </button>
      
    </div>
  )
}

export default Navbar
