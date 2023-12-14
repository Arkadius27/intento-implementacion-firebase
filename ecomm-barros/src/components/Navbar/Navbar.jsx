import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export const Navbar = () => {
  return (
    <div className='navbox'>
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <Link to='/signup' className="navlinks">SIGN UP</Link>
        <Link to='/login' className="navlinks">Login</Link>
      </div>
    </div>
  )
}
