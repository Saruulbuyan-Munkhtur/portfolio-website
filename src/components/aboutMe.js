import React from 'react';
import Icons from './icons';
import Img from 'gatsby-image';

import '../scss/4-components/aboutMe.scss'

const AboutMe = () => {
  
  return (
    <div className="aboutMe-body">
      <div className="aboutMe-title">
        <h1>ABOUT ME</h1>
        <h2>GET TO KNOW ME BEFORE YOU DIVE INTO MY CONTENT</h2>
      </div>
      <div className="aboutMe-photo">
        <Img fixed={"../images/gastby.jpg"} />
      </div>
      <div className="aboutMe-icons">
        <Icons />        
      </div>
      <div className="aboutMe-content">
        <p> 
          I am a self-employed MERN Fullstack developer based in Ulaanbaatar, Mongolia.
        </p>
      </div>      
    </div>
  )
}

export default AboutMe;