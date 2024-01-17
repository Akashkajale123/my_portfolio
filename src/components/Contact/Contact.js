import React from 'react'
import './Contact.css'
import Facebook_icon from '../../assets/facebook-icon.png'
import Twitter from '../../assets/twitter.png'
import YouTube from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.png'
const Contact = () => {
  return (
    <div id='contact'>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <form action="" className="contactForm">
        <input type="text" className='name' placeholder='your name'/>
        <input type="email" className="email"  placeholder='your email'/>
        <textarea name="message" rows="5" placeholder='your message' className='msg'></textarea>
        <button className="submitBtn" type='submit' value='send'>Submit</button>
        <div className="links">
            <img src={Facebook_icon} alt="facebook" className="link" />
            <img src={Twitter} alt="twitter" className="link" />
            <img src={YouTube} alt="youtube" className="link" />
            <img src={Instagram} alt="instagram" className="link" />
        </div>
      </form>
    </div>
  )
}

export default Contact
