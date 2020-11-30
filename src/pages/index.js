import React from "react"
//import { Link } from "gatsby"

import Layout from "../layout/layout"
import Head from "../meta/head"
import SEO from "../meta/seo"

import QuoteList from "../components/quoteList"
import Skills from "../components/skills"
import Landing from "../components/landing"

import "../scss/main.scss"

const IndexPage = () => (

  <Layout>
    <Head />
    <SEO title="Home" />
    <div>
      <section className="homePage-landing">
        <Landing />
      </section>
      <section className="homePage-quotes">
        <QuoteList />
      </section>
      <section className="homePage-skills">
        <Skills />
      </section>
    </div>
  </Layout>
)

export default IndexPage

