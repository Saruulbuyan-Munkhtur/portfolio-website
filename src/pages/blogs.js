import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogList from '../components/blogList'


const BlogPage = () => {
  return (
    <Layout>
      <SEO title="My Blogs" />
      <h1>This is where my blogs will go</h1>
      <p>This is the page where all my written blogs will be.</p>
      <BlogList></BlogList>
  </Layout>
  )
}

export default BlogPage;