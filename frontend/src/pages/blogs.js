import React from 'react';
import Layout from '../layout/layout'
import BlogList from '../components/blogList'

import '../scss/main.scss'


const BlogPage = () => {
 
  return (
    <Layout>
      <div className="blogs-main">
        <div className="blogs-blogList">
          <BlogList /> 
        </div>
      </div>
    </Layout>
  )
}



export default BlogPage;

