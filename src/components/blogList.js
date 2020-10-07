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
              thumbnail {
                childImageSharp {
                  fixed(width: 450, height: 350) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
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
        <div className="blogList-title">
          <h1 >Blog Posts Relating to {tag}</h1>
        </div>

        <div className="blogList-body">
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
  
        <div className="blogList-body">
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
