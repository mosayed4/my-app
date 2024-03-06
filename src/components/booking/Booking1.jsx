import React, { Fragment } from 'react'
import secone from '../booking/book.module.css'
// import imgbok55 from '../../images/Book A Table (1).png'
const Booking1 = () => (
  <div className={secone.parent}>
  <p className={secone.title_head}>Book A Table</p>
  <p className={secone.desc}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
  <div className={secone.container}>
  <form>
    <div className={secone.row_one}>
      
        <div className={secone.col}>
    <label >Date</label>
    <input type="date"  name="date" placeholder='04/01/2024' />
    </div>

    <div className={secone.col}>
    <label>Time</label>
    <input type="time"  name="time" placeholder='06:30 PM' />
    </div>
    </div>

    <div className={secone.row_two}>
    <div className={secone.col}>
    <label >Name</label>
    <input type="text"   name="name" placeholder='Enter your name' />
    </div>
    <div className={secone.col}>
    <label>Phone</label>
    <input type="tel"  name="phone" placeholder='x-xxx-xxx-xxxx'  />
    </div>
    </div>
    <div className={secone.row_three}>
    <label >Total Person</label>
    <input type="number"  name="total" placeholder='1 person' />

    </div>
    <button type="submit"  value="Submit">Book A Table</button>

  </form>
  </div>

  <iframe title="Map" width="100%" height="900px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
</div>
 );


export default Booking1