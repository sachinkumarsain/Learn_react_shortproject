import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <ul>
    <li>
      <Link to="/" >Main</Link>
      <Link to="/about" >About</Link>
      <Link to="/blog" >Blog</Link>
      <Link to="/contact" >Contact</Link>
    </li>
   </ul>
   </>
  )
}

export default Navbar