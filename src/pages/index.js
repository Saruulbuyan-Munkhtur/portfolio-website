import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../layout/layout"
import Head from "../meta/head"
import SEO from "../meta/seo"

import Landing from "../components/landing"
import AboutMe from "../components/aboutMe"
import QuoteList from "../components/quoteList"
import Skills from "../components/skills"

import "../scss/main.scss"


const IndexPage = ({tag}) => {
  const homepageData = useStaticQuery(graphql`
    {
      strapiHomepage {
        subtitle
        title
        profilePicture {
          publicURL
          name
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }  
  `)
  return (
    <Layout>
      <Head />
      <SEO title="Home" />
      <div>
        <section className="homePage-landing">
          <h1>{homepageData.strapiHomepage.title}</h1>
          <Landing homepageData={homepageData}/>
        </section>
        <section className="homePage-aboutMe">
          <AboutMe />
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
}

export default IndexPage

