import React, { Fragment } from 'react'
import Nav from '../components/Navbar/Nav'
import { Footer } from '../components/footer/Footer'
import NavMenu from '../components/menu/NewNav/NavMenu'
import { Outlet } from 'react-router-dom'
import FootMenu from '../components/menu/footnew/FootMenu'

const Menu = () => {
  return (
    <Fragment>
    <Nav/>
  <NavMenu/>
    <Outlet/>
   
    

   <FootMenu/>
   <Footer/>
    </Fragment>

    
  )
}

export default Menu