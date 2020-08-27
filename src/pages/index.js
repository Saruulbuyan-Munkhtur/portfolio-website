import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Personal2 from "../components/JSImages/personal2"

import '../CSS-Files/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div 
      style={{
        
        display: `flex`,
        flexDirection: `row`,
        flexWrap: `nowrap`,
        justifyItems: `flex-end`,
        justifyContent: `space-between`,
        width: `1200px`,
    }}>
      <div style={{maxWidth:700, flex:1, marginRight: `10%`}}>
        <h1 style={{borderBottom: `1px solid black`}}>Hi, I'm Saruulbuyan Munkhtur</h1>
        <p>Welcome to my portfolio website</p>
      </div>

      <div style={{maxWidth:500, flex: 1, borderRadius: `50px`,}}>
        <Personal2 classname="Personal 2"/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
