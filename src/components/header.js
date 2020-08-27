import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.styles.css'

import Image from './image';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      backgroundColor: `#32A1E6`,
      backgroundImage: `linear-gradient(120deg, #32A1E6 30%, #7ABFEA 91%)`,
      height: `120px`,
      borderBottom: `3px solid black`,
    }}
  >
    <div className="navbar">
    
      
        <Link to="/" className="Link">
          <h7 id="Name">
            {siteTitle}
          </h7>
        </Link>
      
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `nowrap`,

          allignItems: `flex-start`,
          justifyContent: `space-between`,
          color: `#f8f8ff`,
          textDecoration: `none`,
          width: 800,
        }}>
          <div><Link to="/aboutMe" className="Link">About Me</Link></div>
          <div><Link to="/portfolio" className="Link">Portfolio</Link></div>
          <div><Link to="/myBlogs" className="Link">My Blogs</Link></div>
          <div><Link to="/contact" className="Link">Contact</Link></div>
          <div><button><Link to="/" className="Link">Dark Mode</Link></button></div>
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
