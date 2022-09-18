import React from "react";

import Spinner from "../../shared/components/Spinner";
import { useGetPosts } from "../hooks/useGetPosts";

import CreatePostButton from "./buttons/CreatePostButton";
import SearchPostsInput from "./SearchPostsInput";
import PostList from "./PostList";

function Posts() {
  const { isLoading } = useGetPosts();

  return (
    <div>
      <Spinner isLoading={isLoading}>
        <div className="posts-header">
          <CreatePostButton />
          <SearchPostsInput />
        </div>
        <PostList />
      </Spinner>
    </div>
  );
}

export default Posts;
