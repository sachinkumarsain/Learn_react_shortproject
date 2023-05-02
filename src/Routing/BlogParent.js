import React from 'react'
import { Outlet } from 'react-router-dom'

function BlogParent() {
  return (
   <>
   <h1>BlogPerent</h1>
   <Outlet/>
   </>
  )
}

export default BlogParent