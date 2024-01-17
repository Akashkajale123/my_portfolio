import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id="intro">
        <div className="intro-content">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Akash</span><br />Website Designer</span>
            <p className="intropara">I am a skilled and passionate web designer with experince in creating <br /> visually appealling and user-friendly websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro
