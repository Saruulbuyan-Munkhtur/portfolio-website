import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../scss/main.scss'
import Hexagons from '../assets/geometric_hexagon.svg'


const Header = ({ siteTitle }) => (
  <header className="navbar-main">
      <Link to="/" className="navbar-logo"><Hexagons /></Link>
      <ul className="navbar-list">
        <li><Link to="/portfolio" className="navbar-link">Portfolio</Link></li>
        <li><Link to="/blogs" className="navbar-link" state={{tag: ""}}>Blogs</Link></li>
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
