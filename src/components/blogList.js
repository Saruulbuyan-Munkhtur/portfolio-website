import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import '../scss/main.scss'
import BlogView2 from './blogView2'

const BlogList = ({tag}) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              subtitle
              topics
              excerpt
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(typeof(data.allMarkdownRemark.edges))
  const edges = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.topics.includes(tag))
  
  if(tag) {
    return (
      <div>
        <div>
          <h2>Blog Posts Relating to {tag}</h2>
        </div>

        <div className="list">
          {edges.map((edge) => {
            return (
              <BlogView2 edge={edge}/>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <h2>Read </h2>
        </div>
  
        <div className="list">
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <BlogView2 edge={edge}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default BlogList;
