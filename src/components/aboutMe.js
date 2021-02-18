import React from 'react';
import Icons from './icons';
import Img from 'gatsby-image';

import '../scss/4-components/aboutMe.scss'
import { useStaticQuery, graphql } from 'gatsby';

const AboutMe = ({ homepageData }) => {
  const aboutmeData = useStaticQuery(graphql`
    {
      strapiHomepage {
        aboutme {
          aboutmeDescription
          aboutmeSubtitle
          id
          aboutmeTitle
        }
      }
    }
  `) 
  const aboutme = aboutmeData.strapiHomepage.aboutme;
  const profilePicture = homepageData.strapiHomepage.profilepicture.childImageSharp.fixed;

  return (
    <div className="aboutMe-body">
      <div className="aboutMe-title">
        <h1>{aboutme.aboutmeTitle}</h1>
        <h2>{aboutme.aboutmeSubtitle}</h2>
      </div>
      <div className="aboutMe-photo">
        <Img 
          fixed={profilePicture} 
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
          fadeIn={true}
          className="aboutMe-image"
          />
      </div>
      <div className="aboutMe-icons">
        <Icons />        
      </div>
      <div className="aboutMe-content">
        <p>{aboutme.aboutmeDescription}</p>
      </div>      
    </div>
  )
}

export default AboutMe;