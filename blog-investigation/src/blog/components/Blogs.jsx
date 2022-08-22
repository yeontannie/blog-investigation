import React from "react";
import { Empty } from "antd";

import Spinner from "../../shared/components/Spinner";
import { useGetBlogs } from "../hooks/useGetBlogs";
import BlogCard from "./BlogCard";

function Blogs() {
  const { isLoading, blogs } = useGetBlogs();

  return (
    <div>
      {isLoading && <Spinner />}
      {blogs.length > 0 && (
        <div className="blog-cards-list">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              name={blog.name}
              description={blog.description}
              postsNum={blog.posts.totalItems}
            />
          ))}
        </div>
      )}
      {blogs.length === 0 && !isLoading && <Empty />}
    </div>
  );
}

export default Blogs;