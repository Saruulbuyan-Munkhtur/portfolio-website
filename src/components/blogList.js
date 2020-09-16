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
  console.log(data)
  return (
    <div className="list">
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <BlogView2 edge={edge}/>
        )
      })}
    </div>
  )
}

export default BlogList
