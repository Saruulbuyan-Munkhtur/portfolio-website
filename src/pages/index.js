import React from "react"
//import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Personal2 from "../components/JSImages/personal2"
import Image from "../components/JSImages/image"

import '../CSS-Files/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="body">
      <div className="Intro">
        <h1>Hi, I'm Saruulbuyan Munkhtur</h1>
        <p>Welcome to my portfolio website</p>
      </div>

      <div className="Pic">
        <Personal2 classname="Personal 2"/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
