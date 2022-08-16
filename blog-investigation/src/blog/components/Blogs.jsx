import React from "react";

import Spinner from "../../shared/components/Spinner";
import { useGetBlogs } from "../hooks/useGetBlogs";
import BlogCard from "./BlogCard";

function Blogs() {
  const { isLoading, blogs } = useGetBlogs();

  if (isLoading) {
    return <Spinner />;
  } else if (blogs.length > 0) {
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
  return <h3 className="home-text">No data to display</h3>;
}

export default Blogs;
