import React from 'react';
import { graphql } from 'gatsby';
import Markdown from "react-markdown";
import Img from "gatsby-image";
import Tex from '@matejmazur/react-katex'
import math from 'remark-math'
import 'katex/dist/katex.min.css' // `react-katex` does not import the CSS for you

import '../scss/main.scss';

import Layout from '../layout/layout'
import CategoryList from '../components/categoryList';
import ArticleSide from '../components/articleSide';

const renderers = {
  inlineMath: ({value}) => <Tex math={value} />,
  math: ({value}) => <Tex block math={value} />
}
//import Icons from '../components/icons'


export const data = graphql`
  query($slug: String!) {
    strapiArticle(slug: {eq: $slug}) {
     categories {
        name
        slug
      }
      content
      date
      id
      strapiId
      subtitle
      title
      thumbnail {
        childImageSharp{
          fluid(maxHeight: 500){
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
      <div className="blog-layout"> 
        <article className="blog-main">
          <div className="blog-blogTitle">
            <div>
                <h1>{article.title}</h1>
                <h2>{article.subtitle} <span>{article.date} · 2 min read </span></h2>
                {/* <p>{article.date} · {props.data.markdownRemark.timeToRead} min read</p> */}
                <div className="s9-widget-wrapper"></div>
            </div>
            <Img fluid={article.thumbnail.childImageSharp.fluid} />
          </div>
          <div className="blog-content">
            <Markdown source={article.content} escapeHtml={false} plugins={[math]} renderers={renderers} />
          </div>
          <div id="s9comments"></div>
          <script defer src="https://social9.com/comments/js/s9comments.js"></script>
          <CategoryList categories={article.categories}/>
        </article>
        <section>
          <h1 className="blogList-title">Some other articles you might like: </h1>
          <ArticleSide />
        </section>
      </div>
    </Layout>
  )
}

export default Blog