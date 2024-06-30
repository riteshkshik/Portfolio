import React from 'react'
import './Contact.css'
import these_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={these_pattern} alt="Theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>riteshkshik@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 9700567381</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Noida, Sector - 62, UP, India</p>
            </div>
          </div>
        </div>
        <form className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" id="" placeholder='Enter Your Name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email'/>
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
