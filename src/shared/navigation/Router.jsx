import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import React from "react";

import Home from "../components/Home";
import Error from "../components/Error";
import Blogs from "../../blog/components/Blogs";
import Posts from "../../post/components/Posts";
import Post from "../../post/components/Post";
import PostsContextProvider from "../../post/store/PostsContextProvider";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Outlet />}>
        <Route index element={<Blogs />} />
        <Route path=":blogId/posts" element={<Outlet />}>
          <Route
            index
            element={
              <PostsContextProvider>
                <Posts />
              </PostsContextProvider>
            }
          />
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
