
import secone from './contact.module.css'
// import imgbok55 from '../../images/Book A Table (1).png'
const Contact = () => (
  <div className={secone.parent}>
  <p className={secone.title_head}>Contact Us</p>
  <p className={secone.desc}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
  <div className={secone.container}>
  <form>
    <div className={secone.row_one}>
      
        <div className={secone.col}>
    <label >Name</label>
    <input type="text"  name="name" placeholder='Enter your name' />
    </div>

    <div className={secone.col}>
    <label>Email</label>
    <input type="Email"  name="Email" placeholder='Enter Email address' />
    </div>
    </div>

    <div className={secone.row_two}>
    <div className={secone.col2}>
    <label >Subject</label>
    <input type="text"   name="subject" placeholder='Write a subject' />
    </div>
    <div className={secone.col1}>
    <label>Message</label>
    <textarea  name="message" placeholder='Write your message'  />
    </div>
    </div>
    <div className={secone.row_three}>


    </div>
    <button type="submit"  value="Submit">Send</button>

  </form>
  </div>

  <iframe title="Map" width="100%" height="00px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
</div>
 );


export default Contact