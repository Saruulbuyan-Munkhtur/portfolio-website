import React from "react"
//import { Link } from "gatsby"

import Layout from "../layout/layout"
import Head from "../meta/head"
import SEO from "../meta/seo"
import Quote from "../components/quote"

import Code_Thinking from "../assets/code_thinking.svg"
import Task_Insertion from "../assets/task_insertion.svg"
import Login_Door from "../assets/login_door.svg"
import Detailed_Analysis from "../assets/detailed_analysis.svg"
import Deadline from "../assets/deadline.svg"
import Content from "../assets/content.svg"
import Blog from "../assets/blog.svg"
import Choice from "../assets/choice.svg"
import Id_Card from "../assets/id_card.svg"
import Relaxing from "../assets/relaxing.svg"


import React_SVG from "../assets/react.svg"
import Javascript from "../assets/javascript.svg"
import Cplusplus from "../assets/cplusplus.svg"
import Firebase from "../assets/firebase.svg"
import Anaconda from "../assets/anaconda.svg"
import Gatsby_SVG from "../assets/gatsby.svg"
import Googleanalytics from "../assets/googleanalytics.svg" 
import Graphql_SVG from "../assets/graphql.svg"
import Typescript from "../assets/typescript.svg"





//import backgroundImage from "../components"
//import Image from "../components/JSImages/image"

// import BlogList from "../components/blogList"
// import Icons from "../components/icons"
// import Avatar from "../components/avatar";


import "../scss/main.scss"

const IndexPage = () => (

  <Layout>
    <Head />
    <SEO title="Home" />
    <div>
      <section className="homePage-index">
        <div className="homePage-illustration">
          <Code_Thinking className="homePage-SVG"/>
        </div> 
        <div className="homePage-content">
            <h1>I"m Saruulbuyan Munkhtur. Welcome to my Blog and Portfolio.</h1>
            <h2>
              I am React TypeScript fullstack web developer. I also have experience in Data Science and Competitive Coding.
            </h2>
            <p>
              I"m also an auto-didact and an aspiring polymath. I believe that information and knowledge are fully available to those who want to learn. My blogs are meant to help on my journey of learning and hopefully you can find some use in them as well.
            </p>
        </div>
      </section>
      <section>
        <Quote data={" "}/>
      </section>
      <section className="homePage-index">
        <div className="homePage-illustration">
          <Choice className="homePage-SVG"/>
        </div> 
        <div className="homePage-content">
            <h1>My Programming Stack and Experience</h1>
            <div className="homePage-illustration">
              <Cplusplus className="homePage-SVG" />
            </div> 
            <div class="container">
              <div class="skills react">70%</div>
            </div>

            <div className="homePage-illustration">
            </div> 
            <div class="container">
              <div class="skills css">80%</div>
            </div>

            <div className="homePage-illustration">
            </div> 
            <div class="container">
              <div class="skills js">65%</div>
            </div>

            <div className="homePage-illustration">
            </div> 
            <div class="container">
              <div class="skills php">60%</div>
            </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage

