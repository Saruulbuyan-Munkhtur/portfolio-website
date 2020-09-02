import React from 'react'
import { Link } from 'gatsby'


import '../CSS-Files/blogView.scss'

const BlogView = ({ edge }) => {
    console.log("tesst")
    return (
      <div className="blog-card">
      <div className="meta">
        <div className="photo" /* style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" */></div>
        <ul className="details">
          <li className="author"><Link to="#">Saruulbuyan Munkhtur</Link></li>
          <li className="date">{edge.node.frontmatter.date}</li>
          <li className="tags">
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
      <div className="description">
        <h1>{edge.node.frontmatter.title}</h1>
        <h2>{edge.node.frontmatter.subtitle}</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
        <p className="read-more">
          <Link to="#">Read More</Link>
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