import React from "react";
import { useParams } from "react-router-dom";

import { useGetPosts } from "../hooks/useGetPosts";
import Spinner from "../../shared/components/Spinner";
import NoData from "../../shared/components/NoData";
import PostCard from "./PostCard";
import CreatePostButton from "./CreatePostButton";

function Posts() {
  const { blogId } = useParams();
  const { isLoading, posts } = useGetPosts(blogId);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && <CreatePostButton />}
      {posts.length > 0 && (
        <div className="post-card-list">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              published={post.published}
            />
          ))}
        </div>
      )}
      {posts.length === 0 && !isLoading && <NoData />}
    </div>
  );
}

export default Posts;
