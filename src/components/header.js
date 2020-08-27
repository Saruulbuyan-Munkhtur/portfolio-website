import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.styles.css'

import Image from './image';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="navbar">
    
      
        <Link to="/">
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
          justifyContent: `space-around`,
          color: `#f8f8ff`,
          textDecoration: `none`,
          width: 800,
        }}>
          <div><Link to="/AboutMe"><h8>About Me</h8></Link></div>
          <div><Link to="/Portfolio"><h8>Portfolio</h8></Link></div>
          <div><Link to="/"><h8>My Blogs</h8></Link></div>
          <div><Link to="/"><h8>Contact</h8></Link></div>
          <div><button><Link to="/"><img href='../images/codewars.svg'></img></Link></button></div>
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
