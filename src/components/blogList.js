import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import '../scss/main.scss'
import BlogView from './blogView'

const BlogList = () => {
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
  console.log(data)
  return (
    <div className="list">
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <BlogView edge={edge}/>
        )
      })}
    </div>
  )
}

export default BlogList
