import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

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
              fixed(height: 55) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          favicon {
            childImageSharp {
              fixed(width: 60) {
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
          <Header globalData={data.strapiGlobal}/>
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
