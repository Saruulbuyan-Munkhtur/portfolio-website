import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Information" />
    <h1>Who am I?</h1>
    <p>This is an about me page design to introduce myself briefly for anyone who visits.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact