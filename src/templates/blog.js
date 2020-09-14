import React from 'react'
import { graphql, Link } from 'gatsby'
import '../scss/main.scss'

import Layout from '../components/layout'


export const query = graphql`
  query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date
      topics
    }
    html
  }
}

`



const Blog = (props) => {
  return (
    <Layout>
      <div>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span>{props.data.markdownRemark.frontmatter.date}</span>
        <ul className="topics">
              {props.data.markdownRemark.frontmatter.topics ? props.data.markdownRemark.frontmatter.topics.map((topic) => {
                return (
                  <li>
                    <Link to>{topic}</Link>
                  </li>
                )
              }): props.data.markdownRemark.frontmatter.date}
        </ul>
      </div>
      <div className="blog">
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
      </div>
    </Layout>
  )
}

export default Blog