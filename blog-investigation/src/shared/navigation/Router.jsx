import { Routes, Route, Outlet } from "react-router-dom";
import React from 'react'
import Home from '../components/Home'
import Error from '../components/Error'
import Posts from '../../post/components/Posts'
import Post from '../../post/components/Post'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Outlet />}>
          <Route index element={<Posts />} />
          <Route path=':postId' element={<Post />}/>
        </Route>
        <Route path='*' element={<Error />} />
    </Routes>
  )
}
