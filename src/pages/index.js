import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SEO from "../components/seo"
import SVG from "../assets/code_thinking.svg"

//import backgroundImage from "../components"
//import Image from "../components/JSImages/image"

// import BlogList from '../components/blogList'
// import Icons from '../components/icons'
// import Avatar from '../components/avatar';


import '../scss/main.scss'

const IndexPage = () => (

  <Layout>
    <Head />
    <SEO title="Home" />
    <section className="homePage-index">
      <div className="homePage-illustration">
        <SVG className="homePage-SVG"/>
      </div>
      <div className="homePage-content">
          <h1>I'm Saruulbuyan Munkhtur. Welcome to my Blog and Portfolio.</h1>
          <h2>
            I am React TypeScript fullstack web developer. I also have experience in Data Science and Competitive Coding.
          </h2>
          <p>
            I'm also an auto-didact and an aspiring polymath. I believe that information and knowledge are fully available to those who want to learn. My blogs are meant to help on my journey of learning and hopefully you can find some use in them as well.
          </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

