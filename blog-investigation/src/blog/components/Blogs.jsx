import React from "react";

import { useGetBlogs } from "../hooks/useGetBlogs";
import Translator from "../../shared/components/Translator";
import Spinner from "../../shared/components/Spinner";
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
              name={blog.name}
              description={blog.description}
              postsNum={blog.posts.totalItems}
            />
          ))}
        </div>
      )}
      {blogs.length === 0 && !isLoading && (
        <h3 className="home-text">
          <Translator text="No data to display" />
        </h3>
      )}
    </div>
  );
}

export default Blogs;
