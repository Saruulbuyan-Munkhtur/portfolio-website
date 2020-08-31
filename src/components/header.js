import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../CSS-Files/header.styles.css'
import Personal1 from './JSImages/personal1'
import Expo from '../assets/expo.svg'

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar">
    

        <Link to="/" className="Link">
          <Expo className="Expo"/>
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
          <div><Link to="/blogs" className="Link">My Blogs</Link></div>
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
