import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogList from '../components/blogList'
import mystyles from '../scss/blogs.module.scss'


const BlogPage = () => {
  return (
    <Layout>
      <SEO></SEO>
      <div className={mystyles.container}>
        <BlogList></BlogList>
      </div>
    </Layout>
  )
}

export default BlogPage;