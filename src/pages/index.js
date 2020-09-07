import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import backgroundImage from "../components"
//import Image from "../components/JSImages/image"

import mystyles from '../CSS-Files/index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={mystyles.index}>
      <div className={mystyles.Intro}>
        <h1>Hi, I'm Saruulbuyan Munkhtur</h1>
        <p>Welcome to my portfolio website</p>
      </div>

      
    </div>
  </Layout>
)

export default IndexPage


{/* <div className={mystyles.Pic}>
        <Personal2 className={mystyles.Personal2}/>
      </div> */}