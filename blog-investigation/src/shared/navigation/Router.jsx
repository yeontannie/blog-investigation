import { Routes, Route } from "react-router-dom";
import React from 'react'
import SharedPostsLayout from '../components/layout/SharedPostsLayout'
import Home from '../components/Home'
import Error from '../components/Error'
import Login from '../authentication/Login'
import Posts from '../../post/components/Posts'
import Post from '../../post/components/Post'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/posts' element={<SharedPostsLayout />}>
          <Route index element={<Posts />} />
          <Route path=':postId' element={<Post />}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
    </Routes>
  )
}
