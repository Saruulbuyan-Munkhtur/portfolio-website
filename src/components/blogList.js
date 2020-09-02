import React from "react"
import { useStaticQuery, graphql } from "gatsby"


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
              img_link
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
    <div>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <BlogView edge={edge}/>
        )
      })}
    </div>
  )
}

export default BlogList
