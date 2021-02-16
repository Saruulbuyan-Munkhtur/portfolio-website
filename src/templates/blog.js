import React from 'react';
import { graphql } from 'gatsby';
import Markdown from "react-markdown";
import '../scss/main.scss';

import Layout from '../layout/layout'

//import Icons from '../components/icons'


export const data = graphql`
  query($slug: String!) {
    strapiArticle(slug: {eq: $slug}) {
     categories {
        Name
      }
      content
      date
      id
      strapiId
      subtitle
      title
      thumbnail {
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  }
`;


const Blog = ({ data }) => {
  const article = data.strapiArticle;
  return (
    <Layout>
      <article className="blog-main">
        <div className="blog-blogTitle">
          <div class="s9-widget-wrapper"></div>
          <div>
              <h1>{article.title}</h1>
              <h2>{article.subtitle} <span>{article.date} · 2 min read </span></h2>
              {/* <p>{article.date} · {props.data.markdownRemark.timeToRead} min read</p> */}
          </div>
        </div>
        <div className="blog-content">
          <Markdown source={article.content} escapeHtml={false} />
        </div>
      </article>
    </Layout>
  )
}

export default Blog