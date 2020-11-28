import React from "react"
//import { Link } from "gatsby"

import Layout from "../layout/layout"
import Head from "../meta/head"
import SEO from "../meta/seo"

import QuoteList from "../components/quoteList"
import Skills from "../components/skills"
import Landing from "../components/landing"







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
        <Landing />
      </section>
      <section>
        <QuoteList />
      </section>
      <section>
        <Skills />
      </section>
    </div>
  </Layout>
)

export default IndexPage

