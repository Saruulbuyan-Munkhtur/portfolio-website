/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import PageTransition from 'gatsby-plugin-page-transitions';
// import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import '../scss/main.scss'


const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    // <>
    // {/* <TransitionProvider location={location}>
    //   <TransitionViews> */}
        <div  className="body"> 
          {/* <PageTransition
            defaultStyle={{
              transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
              left: '100%',
              position: 'absolute',
              width: '100%',
            }}
            transitionStyles={{
              entering: { left: '0%' },
              entered: { left: '0%' },
              exiting: { left: '100%' },
            }}
            transitionTime={1000}
          > */}
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>
              {children}
              <Sidebar/>
            </main>
            <Footer siteTitle={data.site.siteMetadata.title}/>
          {/* </PageTransition> */}
        </div>
    //   {/* </TransitionViews>
    // </TransitionProvider> */}
    // </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
