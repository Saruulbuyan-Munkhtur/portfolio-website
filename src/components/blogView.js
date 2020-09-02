import React from 'react'

import '../CSS-Files/blogView.scss'

const BlogView = ({ edge }) => {
    console.log("tesst")
    return (
        <div>
            <div>
                <img href={edge.node.frontmatter.img_link} alt="img_alt"></img>
            </div>
            <div>
            <h2>{edge.node.frontmatter.title}</h2>
            <h4>{edge.node.frontmatter.subtitle}</h4>
            <ul>
              {edge.node.frontmatter.topics ? edge.node.frontmatter.topics.map((topic) => {
                return (
                  <li>{topic}</li>
                )
              }): edge.node.frontmatter.date}
            </ul>
            <h5>{edge.node.frontmatter.date}</h5>
            <h5>{edge.node.wordCount.words}</h5>
            </div>
            
        </div>
    )
} 

export default BlogView;