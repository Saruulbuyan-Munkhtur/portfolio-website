import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import '../scss/main.scss'
import BlogView from './blogView'

const BlogList = () => {
  const data = useStaticQuery(query);
  const articles = data.allStrapiArticle.edges;
  return (
    <div>
      <div className="blogList-body">
        {articles.map((edge) => {
          return (
            <BlogView edge={edge}/>
          )
        })}
      </div>
    </div>
  )
}

const query = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          categories {
            name
          }
          strapiId
          subtitle
          title
          content
          date
          slug
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default BlogList;
