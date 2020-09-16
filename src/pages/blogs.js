import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Head from "../components/head"
import BlogList from '../components/blogList'

import '../scss/main.scss'


const BlogPage = () => {
  return (
    <Layout>
      <Head />
      <SEO></SEO>
      <div className="container">
        <BlogList/>
      </div>
    </Layout>
  )
}

export default BlogPage;