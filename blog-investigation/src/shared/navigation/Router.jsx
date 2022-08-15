import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import React from "react";

import Home from "../components/Home";
import Error from "../components/Error";
import Posts from "../../post/components/Posts";
import Post from "../../post/components/Post";
import Blogs from "../../blog/components/Blogs";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Outlet />}>
        <Route index element={<Blogs />} />
      </Route>
      <Route path="/posts" element={<Outlet />}>
        <Route index element={<Posts />} />
        <Route path=":postId" element={<Post />} />
      </Route>
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" state={"404"} />} />
    </Routes>
  );
}
