import React from 'react';

import '../scss/main.scss';

import Choice from "../assets/choice.svg"
// import Task_Insertion from "../assets/task_insertion.svg"
// import Login_Door from "../assets/login_door.svg"
// import Detailed_Analysis from "../assets/detailed_analysis.svg"
// import Deadline from "../assets/deadline.svg"
// import Content from "../assets/content.svg"
// import Blog from "../assets/blog.svg"
// import Id_Card from "../assets/id_card.svg"
// import Relaxing from "../assets/relaxing.svg"

import Cplusplus from "../assets/cplusplus.svg"
import React_SVG from "../assets/react.svg"
import Javascript from "../assets/javascript.svg"
import Firebase from "../assets/firebase.svg"
import Anaconda from "../assets/anaconda.svg"
import Gatsby_SVG from "../assets/gatsby.svg"
import Googleanalytics from "../assets/googleanalytics.svg" 
import Graphql_SVG from "../assets/graphql.svg"
import Typescript from "../assets/typescript.svg"

const Skills = () => {
  return (
    <section className="homePage-index">
      <div className="homePage-illustration">
        <Choice className="homePage-SVG"/>
      </div> 
      <div className="skills-wrapper">
        <div class="skill">
          <p>HTML5</p>
          <div class="skill-bar skill1 wow slideInLeft animated">
              <span class="skill-count1">95%</span>
          </div>
        </div>
        <div class="skill">
          <p>CSS3</p>
          <div class="skill-bar skill2 wow slideInLeft animated">
            <span class="skill-count2">85%</span>
          </div>
        </div>
        <div class="skill">
          <p>JQUERY</p>
          <div class="skill-bar skill3 wow slideInLeft animated">
            <span class="skill-count3">75%</span>
          </div>
        </div>
        <div class="skill">
          <p>JAVASCRIPT</p>
          <div class="skill-bar skill4 wow slideInLeft animated">
            <span class="skill-count4">65%</span>
          </div>
        </div>
        <div class="skill">
          <p>PHP</p>
          <div class="skill-bar skill5 wow slideInLeft animated">
            <span class="skill-count5">80%</span>
          </div>
        </div>
        <div class="skill">
          <p>WORDPRESS</p>
          <div class="skill-bar skill6 wow slideInLeft animated">
            <span class="skill-count6">90%</span>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Skills;