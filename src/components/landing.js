import React from 'react';

import '../scss/main.scss';

//import Code_Thinking from "../assets/relaxing.svg"


const Landing = () => {
  return (
    <section>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      {/* <div className="landing-illustration">
        <Code_Thinking className="landing-SVG"/>
      </div>  */}
      <div className="landing-title">
          <span>SARUULBUYAN MUNKHTUR</span>
          <h2>
            MERN-FULLSTACK-DEVELOPER. ASPIRING-POLYMATH.
          </h2>
          <div className="s9-widget-wrapper"></div>
          {/* <p>
            I'm also an auto-didact and an aspiring polymath. I believe that information and knowledge are fully available to those who want to learn. My blogs are meant to help on my journey of learning and hopefully you can find some use in them as well.
          </p> */}
      </div>
    </section>
  )
}

export default Landing;