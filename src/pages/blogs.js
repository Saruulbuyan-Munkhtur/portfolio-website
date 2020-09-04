import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogList from '../components/blogList'


const BlogPage = () => {
  return (
    <Layout>
      <div className="container">
        <BlogList></BlogList>
      </div>
    </Layout>
  )
}

export default BlogPage;