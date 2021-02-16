import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


import '../scss/main.scss'

const BlogView = ({ edge }) => {
  return (
    <div key={edge.node.strapiId} className="blogView-item">
      <Link to={`/blog/${edge.node.slug}`}>
      
        <div className="blogView-thumbnail">
          <Link to={`/blog/${edge.node.slug}`}>
            <Img className="brighten"
              fluid={edge.node.thumbnail.childImageSharp.fluid}
            />
          </Link>
        </div>
        <div className="blogView-content">
          <div className="blogView-header">
            <h1>{edge.node.title}</h1>
          </div>
          <div className="blogView-subtitle">
            <h2>{edge.node.subtitle}</h2>
          </div>
          <div className="blogView-date">
            <p>{edge.node.date}</p>
          </div>
        </div>
      </Link>        
    </div>
    )
} 

export default BlogView;


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