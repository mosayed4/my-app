import React, { Fragment } from 'react'
import img2 from './../../images/content.png'
import content from './about.module.css'
import video1 from "./../../images/Restaurant Ad Video Template (Editable).mp4";
import img3 from "./../../images/features (1).png"
import img4 from "./../../images/Mask group (1).png"
import img5 from "./../../images/text (1).png"
const CopnAbout = () => {
  return (
    <Fragment>
         <section className={content.contentImg}>
        
      <img src={img2} alt="" />
      <div className={content.video1}>   
      <video src={video1} controls="controls" autoPlay ='true' loop muted/>
      </div> 
      <div className={content.contentFeedback}>
        <img src={img3} alt=""  />
        
      </div>
      <div className={content.Allsection}> 
          <img src={img5} alt=""  />
          <img src={img4} alt="" />
        
          </div> 
    
      </section>
    </Fragment>

    
  )
}

export default CopnAbout