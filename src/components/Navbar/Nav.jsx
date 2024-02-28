
import React, { Fragment } from 'react'
import NavLink from 'react-router-dom'
const Nav = () => {
  return (
    <Fragment>
    <header>
    <span>
        logo
      </span>
    <ul>
    <NavLink to={'/home'}>Home</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/contcant'}>Contcant</NavLink>
    <NavLink to={'/Login'}>Login</NavLink>
    <NavLink to={'/menu'}>Menu</NavLink>
    <NavLink to={'/pages'}>Pages</NavLink>
    <NavLink to={'/registration'}>Registration</NavLink>
   
    </ul>
    </header>
    </Fragment>
  )
}

export default Nav