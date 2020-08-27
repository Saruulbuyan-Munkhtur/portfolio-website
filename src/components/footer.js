import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import './footer.styles.scss'

const Footer = () => (
  <footer>
    This is a footer
    © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer