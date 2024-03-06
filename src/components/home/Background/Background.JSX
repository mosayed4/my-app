import { Fragment } from "react"
import React  from 'react'
import Background1 from './../../../images/Background.png'
import backgroundStyles from './../../home/home.module.css'
import text1 from './../../..//images/text.png'

import { Link } from "react-router-dom"
const Background = () => {
  return (
    <Fragment>
        <section className={backgroundStyles.backgroundSection}>
        <img src={Background1} alt="" />  
        
        <div className={backgroundStyles.backgroundData}>
        <img src={text1} alt="" />  
        </div>
        <div className={backgroundStyles.backgrounAllBtn}>
          <div className={backgroundStyles.backgrounBtn1}>
            <Link to='/booking'>Book A Table</Link>
          </div>
          <div className={backgroundStyles.backgrounBtn2}>
          <Link to='/menu'>Explore Menu</Link>

          </div>

        </div>
        </section>


    </Fragment>
  )
}

export default Background
