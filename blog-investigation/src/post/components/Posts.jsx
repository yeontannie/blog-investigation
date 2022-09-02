import React from "react";
import { Empty } from "antd";
import { useParams } from "react-router-dom";

import { usePostsContext } from "../store/PostsContextProvider";
import Spinner from "../../shared/components/Spinner";
import { useGetPosts } from "../hooks/useGetPosts";
import CreatePostButton from "./buttons/CreatePostButton";
import PostCard from "./PostCard";
import SearchPostsInput from "./SearchPostsInput";

function Posts() {
  const { blogId } = useParams();

  const { posts } = usePostsContext();
  const { isLoading } = useGetPosts(blogId);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="posts-header">
          <CreatePostButton />
          <SearchPostsInput />
        </div>
      )}
      {posts.length === 0 && !isLoading && <Empty className="empty" />}
      {posts.length > 0 && (
        <div className="post-card-list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
