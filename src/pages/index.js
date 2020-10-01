import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SEO from "../components/seo"

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
    <section className="index">
      <div className="content">
        <h2>I'm Saruulbuyan Munkhtur. Welcome to my Blog and Portfolio.</h2>
        <p>
          
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

