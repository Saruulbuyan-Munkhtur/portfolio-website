import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

import Header from "./header"
import Footer from "./footer"
import Seo from "./seo"
import Sidebar from "./sidebar"
import '../scss/main.scss'



const Layout = ({ children, seo }) => (
  <StaticQuery 
    query={graphql`
      query {
        strapiGlobal {
          defaultSeo {
            metaTitle
            metaDescription
          }
          profileImage {
            childImageSharp {
              fixed(width:55) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      } 
    `}
    render={(data) => (
      <div className="body"> 
          <Seo seo={seo} />
          <Header siteTitle={data.strapiGlobal.defaultSeo.metaTitle}/>
          <Img fixed={data.strapiGlobal.profileImage.fixed}/>
            <main>
              <Sidebar profileImage={data.strapiGlobal.profileImage.childImageSharp.fixed} />
              {children}
            </main>
          <Footer siteTitle={data.strapiGlobal.defaultSeo.metaTitle}/>
      </div>
    )}
  />

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
