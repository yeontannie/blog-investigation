import React from "react";

import Spinner from "../../shared/components/Spinner";
import { useGetBlogs } from "../hooks/useGetBlogs";
import BlogCard from "./BlogCard";

function Blogs() {
  const { isLoading, blogs } = useGetBlogs();

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="blog-cards-list">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            name={blog.name}
            description={blog.description}
            postsNum={blog.posts.totalItems}
          />
        ))}
      </div>
    );
  }
}

export default Blogs;
