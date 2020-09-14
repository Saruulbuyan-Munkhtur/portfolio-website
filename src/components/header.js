import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../scss/main.scss'
import Dark from '../assets/dark2.svg'

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <div><Link to="/" className="Link">{siteTitle}</Link></div>
    <div><Link to="/aboutMe" className="Link">About Me</Link></div>
    <div><Link to="/portfolio" className="Link">Portfolio</Link></div>
    <div><Link to="/blogs" className="Link">My Blogs</Link></div>
    <div><Link to="/contact" className="Link">Contact</Link></div>
    <div><Link to="/"><Dark className="Dark"/></Link></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
