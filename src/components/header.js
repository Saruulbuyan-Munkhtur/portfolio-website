import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../CSS-Files/header.css'
import Personal1 from './JSImages/personal1'
import Expo from '../assets/expo.svg'
import Dark from '../assets/dark2.svg'

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
        <div><Link to="/" className="Link"><h7 id="Name">{siteTitle}</h7></Link></div>
        <div><Link to="/aboutMe" className="Link">About Me</Link></div>
        <div><Link to="/portfolio" className="Link">Portfolio</Link></div>
        <div><Link to="/blogs" className="Link">My Blogs</Link></div>
        <div><Link to="/contact" className="Link">Contact</Link></div>
        <div><Link to="/" className="Link"><Dark className="Dark"/></Link></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.number,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
