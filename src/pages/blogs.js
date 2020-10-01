import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Head from "../components/head"
import BlogList from '../components/blogList'

import '../scss/main.scss'


const BlogPage = ({ location }) => {
  
  return (
    <Layout>
      <Head />
      <SEO></SEO>
      <div className="container">
        {location.state.tag? <BlogList tag={location.state.tag.topic}/>: <BlogList />}
      </div>
    </Layout>
  )
}

export default BlogPage;