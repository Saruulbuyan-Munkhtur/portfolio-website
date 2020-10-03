import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Head from "../components/head"
import { useStaticQuery, graphql } from "gatsby"
import BlogList from '../components/blogList'
import TagList from '../components/tagList'

import '../scss/main.scss'


const BlogPage = ({ location }) => {
  const data = useStaticQuery(graphql`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            topics
          }
        }
      }
    }
  }`)

  let alltopics = [];
  data.allMarkdownRemark.edges.map((edge) => {
    alltopics = alltopics.concat(edge.node.frontmatter.topics)
    return 0;
  })
  
  return (
    <Layout>
      <Head />
      <SEO></SEO>
      <div className="container">
        <div className="blogs-tagList"> 
          <TagList topics={alltopics}/>
        </div>
        {location.state? <BlogList tag={location.state.tag.topic}/>: <BlogList />}
      </div>
    </Layout>
  )
}

export default BlogPage;

