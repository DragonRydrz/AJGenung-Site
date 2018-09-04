import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </div>
)

export default Menu
