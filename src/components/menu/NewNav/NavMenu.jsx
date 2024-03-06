import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import MenuStyael from './menu.module.css'
import img1 from "../../../images/Our Menu.png"


const NavMenu = () => {
  return (
    <Fragment>
      <section className={MenuStyael.ImgS}>
   <img src={img1} alt="" />
      </section>
   <p > We consider all the drivers of change gives you the components <br/>
   you need to change to create a truly happens</p>
    <section  className={MenuStyael.Nav}>

    <ul>
    <NavLink to={'/menu/all'}>All</NavLink>
    <NavLink to={'/menu/breakfastt'}>Breakfastt</NavLink>
    <NavLink to={'/menu/mainDishes'}>Main Dishes</NavLink>
    <NavLink to={'/menu/drinks'}>Drinks</NavLink>
    <NavLink to={'/menu/desserts'}>Desserts</NavLink>
    </ul>
    </section>
    </Fragment>

    
  )
}

export default NavMenu