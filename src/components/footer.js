import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import mystyles from '../scss/footer.module.scss'

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
    <Link to="https://github.com/ErozionZeal"><Github  className={mystyles.icon2}/></Link>
    <Link  to="https://medium.com/@SaruulbuyanMunkhtur"><Medium className={mystyles.icon2}/></Link>
    <Link  to="https://www.linkedin.com/in/saruulbuyan-munkhtur-a82257185/"><LinkedIn className={mystyles.icon2}/></Link>
    <Link  to="https://www.instagram.com/?hl=en"><Instagram className={mystyles.icon2}/></Link>
    <Link  to="https://www.Twitter.com"><Twitter className={mystyles.icon2}/></Link>
    <Link  to="@cedricmunkhtur2020@gmail.com"><Gmail className={mystyles.icon2}/></Link>
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