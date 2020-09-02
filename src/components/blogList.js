import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
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
            }
            wordCount {
              words
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <ol>
      {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
            <h4>{edge.node.frontmatter.subtitle}</h4>
            <ul>
              {edge.node.frontmatter.topics ? edge.node.frontmatter.topics.map((topic) => {
                return (
                  <li>{topic}</li>
                )
              }): edge.node.frontmatter.date}
            </ul>
            <h5>{edge.node.frontmatter.date}</h5>
            <h5>{edge.node.wordCount.words}</h5>
          </li>
        )
      })}
    </ol>
  )
}

export default ComponentName
