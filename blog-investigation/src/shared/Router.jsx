import { Routes, Route } from "react-router-dom";
import React from 'react'
import SharedLayout from './components/layout/SharedLayout'
import SharedPostsLayout from './components/layout/SharedPostsLayout'
import Home from './components/Home'
import Error from './components/Error'
import Login from './components/authentication/Login'
import Posts from '../post/components/Posts'
import Post from '../post/components/Post'

export default function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path='posts' element={<SharedPostsLayout />}>
                    <Route index element={<Posts />} />
                    <Route path=':postId' element={<Post />}/>
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    </div>
  )
}
