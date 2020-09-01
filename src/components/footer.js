import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../CSS-Files/footer.scss'

import Github from '../assets/github.svg'
import Medium from '../assets/medium.svg'
import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Gmail from '../assets/gmail.svg'
import Phone from '../assets/phone.svg'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className='social'>
    <Link><Github  className='icon'/></Link>
    <Link ><Medium className='icon'/></Link>
    <Link ><LinkedIn className='icon'/></Link>
    <Link ><Instagram className='icon'/></Link>
    <Link ><Twitter className='icon'/></Link>
    <Link ><Gmail className='icon'/></Link>
    </div>
    <div><Link ><Phone /> +976 99728346</Link></div>
    <div className='copyright'>
    {siteTitle} © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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