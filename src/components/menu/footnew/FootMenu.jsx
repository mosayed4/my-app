import React from 'react'
import footstyel from './footmenu.module.css'
import img1 from  './../../../images//You can order through apps.png'
import img55 from './../../../images/mm.png'
const FootMenu = () => {
  return (
    <div className={footstyel.cont}>
      <section className={footstyel.imga} >
      <img src={img1} alt="" />
       <p> Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p> 

      </section>
      
      <section className={footstyel.img2}>
        <img src={img55} alt="" />
      </section>

      
    </div>
  )
}

export default FootMenu