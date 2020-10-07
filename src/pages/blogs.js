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
    edge.node.frontmatter.topics.map((topic) => {
      if (!alltopics.includes(topic)){
        alltopics.push(topic)
      }
      return 0;
    })

    return 0;
  })
  
  return (
    <Layout>
      <Head />
      <SEO></SEO>
      <div className="blogs-main">
        <div className="blogs-tagList"> 
          <TagList topics={alltopics}/>
        </div>
        <div className="blogs-blogList">
          {location.state? <BlogList tag={location.state.tag.topic}/>: <BlogList />}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage;

