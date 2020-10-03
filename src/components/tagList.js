import React from 'react';
import { Link } from 'gatsby'
 
import '../scss/main.scss'

export default function TagList({topics}) {
  return (
    <ul className="topics">
      {topics ? topics.map((topic) => {
        console.log(topic)
        return (
            <Link 
              to='/blogs' 
              state={{tag: {topic}}}
              >
              <li className="tag">
              {topic}
              </li>
            </Link>
        )
      }): topics}
    </ul>
  )
}

