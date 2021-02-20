import React from 'react';
import { Link } from 'gatsby'
 
import '../scss/main.scss'

export default function CategoryList({categories}) {
  return (
    <ul className="topics">
      {categories ? categories.map((category) => {
        return (
            <Link 
              to={`/category/${category.slug}`} 
              >
              <li className="tag">
              {category.name}
              </li>
            </Link>
        )
      }): categories}
    </ul>
  )
}

