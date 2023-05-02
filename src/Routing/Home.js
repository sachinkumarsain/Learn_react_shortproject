import React from 'react'
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Main"
import About from "./About"
import Blog from "./Blog"
import Contact from './Contact'
import SingleBlog from "./SingleBlog"
import NotFound from "./NotFound"
import BlogParent from "./BlogParent"
function Home() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<BlogParent />} >
            <Route index element={<Blog/>}/>
            <Route path=':id' element={<SingleBlog />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Home