import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


import '../scss/main.scss'

const BlogView2 = ({ edge }) => {
  console.log("tesst")
  return (
    <div key={edge.node.id} className="blogView-item">
      <div className="blogView-thumbnail">
        <Link to={`/blog/${edge.node.fields.slug}`}>
          <Img
            fixed={edge.node.frontmatter.thumbnail.childImageSharp.fixed}
          />
        </Link>
      </div>
      <div className="blogView-content">
        <div className="blogView-header">
          <h2>{edge.node.frontmatter.title}</h2>
        </div>
        <div className="blogView-subtitle">
          <h4>{edge.node.frontmatter.subtitle}</h4>
        </div>
        <p>{edge.node.frontmatter.date}</p>
        <Link to={`/blog/${edge.node.fields.slug}`}>Read More</Link>
      </div>
    </div>
    )
} 

export default BlogView2;


// <ul>
// 
// </ul>
// <h5>{edge.node.frontmatter.date}</h5>
    //   <div className="blogCard">
    //   <div className="meta">
    //     <div className="photo" /* style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)" */></div>
    //     <ul className="details">
    //       <li className="author"><Link to="#">Saruulbuyan Munkhtur</Link></li>
    //       <li className="date">{edge.node.frontmatter.date}</li>
    //     </ul>
    //   </div>
    //   <div className="description">
    //     <h1>{edge.node.frontmatter.title}</h1>
    //     <h2>{edge.node.frontmatter.subtitle}</h2>
    //     <p> {edge.node.frontmatter.excerpt}</p>
    //     <p className="readMore">
    //     </p>
    //   </div>
    // </div>