import React from 'react'
import { Fragment } from 'react'
import Section1Styles from  './../../home/home.module.css'
import img2 from './../../../images/img (3).png'
import img3 from './../../../images/title.png'
const Section1 = () => {
  return (
    <Fragment>
         <section className={Section1Styles.frsit}>
        
        <img src={img2} alt="" />  
        
        <img src={img3} alt="" />  
        
        </section>

    </Fragment>
  )
}

export default Section1