import React from 'react'
import { graphql} from 'gatsby'
import '../scss/main.scss'

import Layout from '../components/layout'
import TagList from '../components/tagList'
import Head from "../components/head"

//import Icons from '../components/icons'


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
      <Head />
      <article className="blog-main">
        <div className="blog-blogTitle">
          <div>
              <h1>{props.data.markdownRemark.frontmatter.title}</h1>
              <h2>{props.data.markdownRemark.frontmatter.subtitle} <span>{props.data.markdownRemark.frontmatter.date} · {props.data.markdownRemark.timeToRead} min read </span></h2>
              {/* <p>{props.data.markdownRemark.frontmatter.date} · {props.data.markdownRemark.timeToRead} min read</p> */}
              <TagList className="blog-tagList" topics={props.data.markdownRemark.frontmatter.topics}/>
          </div>
        </div>
        <div className="blog-content"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
        </div>
      </article>
    </Layout>
  )
}

export default Blog