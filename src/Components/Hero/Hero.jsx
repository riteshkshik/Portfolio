import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_image} alt="" />
      <h1><span>I am Ritesh,</span> Backend Developer based in India.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ex obcaecati eius nesciunt reprehenderit alias amet hic! Ratione exercitationem harum, laudantium sapiente earum rem odio.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
