import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import '../scss/main.scss'

import Icons from './icons'


import Phone from '../assets/phone.svg'

const Footer = ({ siteTitle }) => (
  <footer className="footer-main">
    <div className="footer-social">
      <Icons width='100px' />
    </div>
    <div className="footer-phone">
      <Link ><Phone /> +976 99728346</Link>
    </div>
    <div className="footer-copyright">
      <span>
        {siteTitle} © {new Date().getFullYear()}, 
        Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby </a>
      </span>
      <br></br>
      <span>
        Icon2s made by <a href="https://www.flaticon2.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon2.com/" title="Flaticon2">www.flaticon2.com</a>
      </span>
    </div>
    
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer