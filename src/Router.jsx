import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import PostsContextProvider from "./post/store/PostsContextProvider";
import Blogs from "./blog/components/Blogs";
import Posts from "./post/components/Posts";
import Post from "./post/components/Post";

import Home from "./shared/components/Home";
import Error from "./shared/components/Error";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Outlet />}>
        <Route index element={<Blogs />} />
        <Route
          path=":blogId/posts"
          element={
            <PostsContextProvider>
              <Outlet />
            </PostsContextProvider>
          }
        >
          <Route index element={<Posts />} />
          <Route path=":postId" element={<Post />} />
        </Route>
      </Route>
      <Route path="/error" element={<Error />} />
      <Route
        path="*"
        element={
          <Navigate
            to="/error"
            state={{
              code: 404,
              message: "Sorry, the page you visited does not exist.",
            }}
          />
        }
      />
    </Routes>
  );
}
