import React from "react"

import '../scss/main.scss'
import BlogView from './blogView'

const BlogList = ({articles}) => {
  return (
    <div>
      <div className="blogList-body">
        {articles.map((edge) => {
          return (
            <BlogView edge={edge}/>
          )
        })}
      </div>
    </div>
  )
}

export default BlogList;
