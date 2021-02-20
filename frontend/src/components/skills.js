import React from 'react';

import '../scss/main.scss';

import Choice from "../assets/code_thinking.svg"
// import Task_Insertion from "../assets/task_insertion.svg"
// import Login_Door from "../assets/login_door.svg"
// import Detailed_Analysis from "../assets/detailed_analysis.svg"
// import Deadline from "../assets/deadline.svg"
// import Content from "../assets/content.svg"
// import Blog from "../assets/blog.svg"
// import Id_Card from "../assets/id_card.svg"
// import Relaxing from "../assets/relaxing.svg"

// import Cplusplus from "../assets/cplusplus.svg"
// import React_SVG from "../assets/react.svg"
// import Javascript from "../assets/javascript.svg"
// import Firebase from "../assets/firebase.svg"
// import Anaconda from "../assets/anaconda.svg"
// import Gatsby_SVG from "../assets/gatsby.svg"
// import Googleanalytics from "../assets/googleanalytics.svg" 
// import Graphql_SVG from "../assets/graphql.svg"
// import Typescript from "../assets/typescript.svg"
// commen

const Skills = () => {
  return (
    <section className="skills-body">
      <div className="skills-illustration">
        <Choice className="skills-SVG"/>
      </div> 
      <div className="skills-wrapper">
        <h1 className="skills-title">My Programming Experience</h1>
        <div class="skill">
          <p>REACT</p>
          <div class="skill-bar skill1 wow slideInLeft animated">
              <span class="skill-count1">75%</span>
          </div>
        </div>
        <div class="skill">
          <p>EXPRESS and NODE JS</p>
          <div class="skill-bar skill2 wow slideInLeft animated">
            <span class="skill-count2">65%</span>
          </div>
        </div>
        <div class="skill">
          <p>SCSS</p>
          <div class="skill-bar skill3 wow slideInLeft animated">
            <span class="skill-count3">85%</span>
          </div>
        </div>
        <div class="skill">
          <p>MONGODB</p>
          <div class="skill-bar skill4 wow slideInLeft animated">
            <span class="skill-count4">45%</span>
          </div>
        </div>
        <div class="skill">
          <p>GATSBY JS</p>
          <div class="skill-bar skill5 wow slideInLeft animated">
            <span class="skill-count5">80%</span>
          </div>
        </div>
        <div class="skill">
          <p>GraphQL</p>
          <div class="skill-bar skill6 wow slideInLeft animated">
            <span class="skill-count6">60%</span>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Skills;