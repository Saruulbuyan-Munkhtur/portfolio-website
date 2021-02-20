import React from 'react';
import Layout from '../layout/layout'
import { graphql} from "gatsby"
import BlogList from '../components/blogList'

import '../scss/main.scss'


export const data = graphql`
  query($slug: String!) {
    allStrapiArticle(filter: {categories: {elemMatch: {slug: { eq: $slug } } } }) {
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
    strapiCategory(slug: { eq: $slug}){
      name
    }
  }
`

const Category = ({ data }) => {
  const articles = data.allStrapiArticle.edges;
  const category = data.strapiCategory.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`
  };

  return (
    <Layout seo={seo}>
      <div className="blogs-main">
        <div className="blogs-blogList">
          <h1 className="blogList-title">{category}</h1>
          <BlogList articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export default Category;

