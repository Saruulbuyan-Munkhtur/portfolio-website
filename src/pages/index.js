import React from "react"
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../layout/layout";

import Landing from "../components/landing";
import AboutMe from "../components/aboutMe";
import QuoteList from "../components/quoteList";
import Skills from "../components/skills";

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
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }  
  `)
  return (
    <Layout>
      <div>
        <section className="homePage-landing">
          <Landing homepageData={homepageData}/>
        </section>
        <section className="homePage-aboutMe">
          <AboutMe homepageData={homepageData}/>
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

