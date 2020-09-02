import React from 'react'
import { Link } from 'gatsby'


import '../CSS-Files/blogView.scss'

const BlogView = ({ edge }) => {
    console.log("tesst")
    return (
        <div>
            <Link to={`/blog/${edge.node.fields.slug}`} class="card">
            <div class="thumb" style={{backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)`}}></div>
              <article>
                <h1>{edge.node.frontmatter.title}</h1>
                <span>{edge.node.frontmatter.subtitle}</span>        
              </article>
            </Link>
            
        </div>
    )
} 

export default BlogView;


// <ul>
// {edge.node.frontmatter.topics ? edge.node.frontmatter.topics.map((topic) => {
//   return (
//     <li>{topic}</li>
//   )
// }): edge.node.frontmatter.date}
// </ul>
// <h5>{edge.node.frontmatter.date}</h5>