import React from 'react';
import Layout from '../layout/layout'
import { graphql, useStaticQuery } from "gatsby"
import BlogList from '../components/blogList'

import '../scss/main.scss'


const BlogPage = ({ location }) => {
  const data = useStaticQuery(query);
 
  return (
    <Layout>
      <div className="blogs-main">
        <div className="blogs-blogList">
          <BlogList articles={data.allStrapiArticle.edges}/>
        </div>
      </div>
    </Layout>
  )
}

const query = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          categories {
            Name
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

export default BlogPage;

