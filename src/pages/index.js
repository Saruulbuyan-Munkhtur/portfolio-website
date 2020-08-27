import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BodyImage from "../components/image"
import Personal2 from "../components/personal2"

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
      <div style={{maxWidth:700, flex:1, marginRight: `20%`}}>
        <h1 style={{borderBottom: `1px solid black`}}>Hi, I'm Saruulbuyan Munkhtur</h1>
        <p>Welcome to my portfolio website</p>
      </div>

      <div style={{maxWidth:500, flex: 1,}}>
        <Personal2/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
