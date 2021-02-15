import React from 'react';
import Icons from './icons';
import Image from 'gatsby-image';

import '../scss/4-components/aboutMe.scss'
import { useStaticQuery } from 'gatsby';

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
  const profilePicture = homepageData.strapiHomepage.profilepicture?.childImageSharp.Fluid;

  return (
    <div className="aboutMe-body">
      <div className="aboutMe-title">
        <h1>{aboutme.aboutmeTitle}</h1>
        <h2>{aboutme.aboutmeSubtitle}</h2>
      </div>
      <div className="aboutMe-photo">
        {/* <Image src={aboutme.profileImages} /> */}
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