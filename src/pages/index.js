import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SEO from "../components/seo"

//import backgroundImage from "../components"
//import Image from "../components/JSImages/image"

// import BlogList from '../components/blogList'
// import Icons from '../components/icons'
// import Avatar from '../components/avatar';


import '../scss/main.scss'

const IndexPage = () => (
  <Layout>
    <Head />
    <SEO title="Home" />
    <section className="index">
      <div className="content">
        <h2>Don't you see the oxygen up so high?</h2>
        <p>
          I am a web and mobile app developer who has experience using React, React Native, Gatsby and GraphQL.
          Sint nostrud Lorem voluptate anim incididunt. Consectetur est incididunt sint deserunt ullamco deserunt incididunt. Excepteur do eiusmod culpa dolor pariatur laborum nisi proident sunt tempor amet. Commodo magna veniam labore reprehenderit enim deserunt eiusmod magna officia amet est. Aliquip mollit mollit nisi eiusmod est sunt sit enim voluptate sint.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage

