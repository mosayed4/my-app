import React, { Fragment } from 'react'
import Nav from '../components/Navbar/Nav'
import { Footer } from '../components/footer/Footer'
import NavMenu from '../components/menu/NavMenu'
import { Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <Fragment>
    <Nav/>
   
   <NavMenu/> 
    
    <Outlet/>

   <Footer/>
    </Fragment>

    
  )
}

export default Menu