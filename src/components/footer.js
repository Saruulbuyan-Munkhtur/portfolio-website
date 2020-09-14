import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import '../scss/main.scss'

import Icons from './icons'


import Phone from '../assets/phone.svg'

const Footer = ({ siteTitle }) => (
  <footer>
    <div>
      <Icons width='50px' />
    </div>
    <div><Link ><Phone /> +976 99728346</Link></div>
    <div className="copyright">
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