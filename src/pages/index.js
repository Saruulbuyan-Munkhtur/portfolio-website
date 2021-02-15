import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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
        id
        subtitle
        title
        profilepicture {
          publicURL
          name
          childImageSharp {
            fixed(width: 200, height: 150) {
              src
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
          <Landing homepageData={homepageData}/>
        </section>
        <section className="homePage-aboutMe">
          <AboutMe homepageData={homepageData}/>
          <Img fixed={homepageData.strapiHomepage.profilepicture.childImageSharp.fixed} />
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

