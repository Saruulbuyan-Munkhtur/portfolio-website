import React from 'react'
import { graphql, Link } from 'gatsby'
import '../scss/main.scss'

import Layout from '../components/layout'
import Icons from '../components/icons'


export const query = graphql`
  query ($slug: String) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date
      topics
      subtitle
    }
    timeToRead
    html
  }
}

`



const Blog = (props) => {
  return (
    <Layout>
      <article>
        <div className="blogTitle">
          <div>
              <h1>{props.data.markdownRemark.frontmatter.title}</h1>
              <h2>{props.data.markdownRemark.frontmatter.subtitle}</h2>
              <span>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <p> · {props.data.markdownRemark.timeToRead} min read</p>
              </span> 
              <ul>
                {props.data.markdownRemark.frontmatter.topics ? props.data.markdownRemark.frontmatter.topics.map((topic) => {
                  return (
                    <li>
                      <Link to>{topic}</Link>
                    </li>
                  )
                }): props.data.markdownRemark.frontmatter.date}
              </ul>
          </div>
        </div>
        <div className="blog">
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </div>
      </article>
    </Layout>
  )
}

export default Blog