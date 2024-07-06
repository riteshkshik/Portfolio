import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_image} alt="" />
      <h1>
        <span>I am Ritesh,</span> Full Stack Developer based in India.
      </h1>
      <p>
        Associate Software Developer skilled in JavaScript, SQL, React & C++.
        Experienced in developing APIs, GPS services, and dynamic web and mobile
        applications. Enthusiastic about optimizing performance and enhancing
        user experiences.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>

        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero
