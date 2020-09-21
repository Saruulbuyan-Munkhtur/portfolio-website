import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../scss/main.scss'
import Dark from '../assets/dark2.svg'

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <div>
      <Link to="/" className="Logo">{siteTitle}</Link>
      <ul>
        <li><Link to="/aboutMe" className="Link">About Me</Link></li>
        <li><Link to="/portfolio" className="Link">Portfolio</Link></li>
        <li><Link to="/blogs" className="Link">My Blogs</Link></li>
        <li><Link to="/contact" className="Link">Contact</Link></li>
        <li><Link to="/"><Dark className="Dark"/></Link></li>
      </ul>
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
