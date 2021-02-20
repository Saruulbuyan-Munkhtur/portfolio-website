import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image";
import '../scss/main.scss'


const Header = ({ globalData }) => (
  <header className="navbar-main">
      <div>
        <Link to="/" className="navbar-logo"><Img fixed={globalData.favicon.childImageSharp.fixed}/></Link>
      </div>
      <ul className="navbar-list">
        <li><Link to="/portfolio" className="navbar-link" aria-label="See more in my Portfolio">Portfolio</Link></li>
        <li><Link to="/blogs" className="navbar-link" aria-label="Read some of my blogs" state={{tag: ""}}>Blogs</Link></li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
