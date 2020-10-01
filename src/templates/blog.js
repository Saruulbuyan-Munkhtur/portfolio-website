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
      <article>
        <div className="blogTitle">
          <div>
              <h1>{props.data.markdownRemark.frontmatter.title}</h1>
              <h2>{props.data.markdownRemark.frontmatter.subtitle}</h2>
              <span>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <p> · {props.data.markdownRemark.timeToRead} min read</p>
              </span> 
              <TagList topics={props.data.markdownRemark.frontmatter.topics}/>
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