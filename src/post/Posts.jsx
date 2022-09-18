import React from "react";

import { useUserSettingsContext } from "../shared/store/UserSettingsProvider";
import Spinner from "../shared/components/Spinner";
import { useGetPosts } from "./hooks/useGetPosts";

import CreatePostButton from "./components/buttons/CreatePostButton";
import SearchPostsInput from "./components/SearchPostsInput";
import PostList from "./components/PostList";

function Posts() {
  const { isLoggedIn } = useUserSettingsContext();
  const { isLoading } = useGetPosts();

  return (
    <div>
      <Spinner isLoading={isLoading}>
        <div className="posts-header">
          {isLoggedIn && <CreatePostButton />}
          <SearchPostsInput />
        </div>
        <PostList />
      </Spinner>
    </div>
  );
}

export default Posts;
