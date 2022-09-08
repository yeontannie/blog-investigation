import React from "react";
import { Empty } from "antd";
import { useParams } from "react-router-dom";

import Spinner from "../../shared/components/Spinner";
import { usePostsContext } from "../store/PostsContextProvider";
import { useGetPosts } from "../hooks/useGetPosts";

import CreatePostButton from "./buttons/CreatePostButton";
import PostCard from "./PostCard";
import SearchPostsInput from "./SearchPostsInput";
import LoadMoreButton from "./buttons/LoadMoreButton";

function Posts() {
  const { blogId } = useParams();

  const { posts, token } = usePostsContext();
  const { isLoading } = useGetPosts(blogId);

  return (
    <div>
      <Spinner isLoading={isLoading}>
        <div className="posts-header">
          <CreatePostButton />
          <SearchPostsInput />
        </div>
        {posts.length === 0 ? (
          <Empty className="empty" />
        ) : (
          <>
            <div className="post-card-list">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <LoadMoreButton />
          </>
        )}
      </Spinner>
    </div>
  );
}

export default Posts;
