import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'


const NavMenu = () => {
  return (
    <Fragment>
      
    <ul>
    <NavLink to={'/'}>All</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/menu/new'}>Menu</NavLink>
    <NavLink to={'/pages'}>Pages</NavLink>
    <NavLink to={'/contcant'}>Contcant</NavLink>
    </ul>
    </Fragment>

    
  )
}

export default NavMenu