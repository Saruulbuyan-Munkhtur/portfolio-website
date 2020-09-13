import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogList from '../components/blogList'
import '../scss/main.scss'

const BlogPage = () => {
  return (
    <Layout>
      <SEO></SEO>
      <div className="container">
        <BlogList></BlogList>
      </div>
    </Layout>
  )
}

export default BlogPage;