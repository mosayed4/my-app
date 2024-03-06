
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import imgLogo from './../../images/Logo.png'





const Nav = () => {
  return (
    <Fragment>
    <header> 
      <nav>

    <span>
    <NavLink to={'/home'}>
    <img src={imgLogo} alt=""  height='50px'/>
  </NavLink>

      </span>
    <ul>
    <NavLink to={'/home'}>Home</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/menu'}>Menu</NavLink>
    <NavLink to={'/pages'}>Pages</NavLink>
    <NavLink to={'/contcant'}>Contcant</NavLink>
    <NavLink to={'/Login'}>Login</NavLink>
    <NavLink to={'/registration'}>Registration</NavLink>
  
    <NavLink to={'/booking'} id='book' >Book A Table</NavLink>
    

   
    </ul>
    </nav>
   
    </header>
    </Fragment>
  )
}

export default Nav