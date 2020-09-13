import React from 'react'
import { Link } from 'gatsby'


import mystyles from '../scss/blogView.module.scss'

const BlogView = ({ edge }) => {
    console.log("tesst")
    return (
      <div className={mystyles.blogCard}>
      <div className={mystyles.meta}>
        <div className={mystyles.photo} /* style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" */></div>
        <ul className={mystyles.details}>
          <li className={mystyles.author}><Link to="#">Saruulbuyan Munkhtur</Link></li>
          <li className={mystyles.date}>{edge.node.frontmatter.date}</li>
          <li className={mystyles.tags}>
            <ul>
              {edge.node.frontmatter.topics ? edge.node.frontmatter.topics.map((topic) => {
                return (
                  <li>{topic}</li>
                )
              }): edge.node.frontmatter.date}
            </ul>
          </li>
        </ul>
      </div>
      <div className={mystyles.description}>
        <h1>{edge.node.frontmatter.title}</h1>
        <h2>{edge.node.frontmatter.subtitle}</h2>
        <p> {edge.node.frontmatter.excerpt}</p>
        <p className={mystyles.readMore}>
          <Link to={`/blog/${edge.node.fields.slug}`}>Read More</Link>
        </p>
      </div>
    </div>
    )
} 

export default BlogView;


// <ul>
// 
// </ul>
// <h5>{edge.node.frontmatter.date}</h5>