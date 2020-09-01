/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../CSS-Files/layout.scss"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div >  
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div
          style={{
            margin: `10% 5% 15% 5%`,
            maxWidth: `100%`,
            height: `70%`,
            padding: `0`,
          }}
        >
          <main style={{width: 1260,
        }}>{children}</main>
          
        </div>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
