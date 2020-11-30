import React from 'react';

import '../scss/main.scss';

import Code_Thinking from "../assets/relaxing.svg"


const Landing = () => {
  return (
    <section>
      <div className="landing-illustration">
        <Code_Thinking className="landing-SVG"/>
      </div> 
      <div className="homePage-content">
          <h1>I'm Saruulbuyan Munkhtur. Welcome to my Blog and Portfolio.</h1>
          <h2>
            I am React TypeScript fullstack web developer. I also have experience in Data Science and Competitive Coding.
          </h2>
          <p>
            I"m also an auto-didact and an aspiring polymath. I believe that information and knowledge are fully available to those who want to learn. My blogs are meant to help on my journey of learning and hopefully you can find some use in them as well.
          </p>
      </div>
    </section>
  )
}

export default Landing;