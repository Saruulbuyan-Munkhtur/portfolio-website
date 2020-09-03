import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import mystyles from '../CSS-Files/footer.module.scss'

import Github from '../assets/github.svg'
import Medium from '../assets/medium.svg'
import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Gmail from '../assets/gmail.svg'
import Phone from '../assets/phone.svg'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className={mystyles.social}>
    <Link><Github  className={mystyles.icon2}/></Link>
    <Link ><Medium className={mystyles.icon2}/></Link>
    <Link ><LinkedIn className={mystyles.icon2}/></Link>
    <Link ><Instagram className={mystyles.icon2}/></Link>
    <Link ><Twitter className={mystyles.icon2}/></Link>
    <Link ><Gmail className={mystyles.icon2}/></Link>
    </div>
    <div><Link ><Phone /> +976 99728346</Link></div>
    <div className={mystyles.copyright}>
    {siteTitle} © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
    <div>Icon2s made by <a href="https://www.flaticon2.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon2.com/" title="Flaticon2">www.flaticon2.com</a></div>
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