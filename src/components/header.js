import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: 1330,
        height: 256,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
    
      <h7 
        style={{ 
          marginLeft: 0,
          allignContent: `Left`,
      }}>
        <Link
          to="/"
          style={{
            color: `#f8f8ff`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h7>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `nowrap`,

          allignItems: `flex-start`,
          justifyContent: `space-around`,
          color: `#f8f8ff`,
          textDecoration: `none`,
          width: 800,
        }}>
          <div><h8>About Me</h8></div>
          <div><h8>Portfolio</h8></div>
          <div><h8>My Blogs</h8></div>
          <div><h8>Contact</h8></div>
          <div><button>Dark Mode</button></div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
