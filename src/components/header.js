import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import mystyles from '../CSS-Files/header.module.scss'
import Dark from '../assets/dark2.svg'

const Header = ({ siteTitle }) => (
  <header className={mystyles.navbar}>
    <div className={mystyles.container}>
        <div><Link to="/" className={mystyles.Link}><h4 className="Name">{siteTitle}</h4></Link></div>
        <div><Link to="/aboutMe" className={mystyles.Link}>About Me</Link></div>
        <div><Link to="/portfolio" className={mystyles.Link}>Portfolio</Link></div>
        <div><Link to="/blogs" className={mystyles.Link}>My Blogs</Link></div>
        <div><Link to="/contact" className={mystyles.Link}>Contact</Link></div>
        <div><Link to="/" className={mystyles.Link}><Dark className={mystyles.Dark}/></Link></div>
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
