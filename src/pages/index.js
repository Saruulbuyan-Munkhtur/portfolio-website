import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import backgroundImage from "../components"
//import Image from "../components/JSImages/image"
import BlogList from '../components/blogList'
import '../scss/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <div className="intro">
        <h1>Hi, I'm Saruulbuyan Munkhtur</h1>
        <p>
          I am a web and mobile app developer who has experience using React, React Native, Gatsby and GraphQL.
        </p>
      </div>
      <BlogList />
      
    </div>
  </Layout>
)

export default IndexPage

