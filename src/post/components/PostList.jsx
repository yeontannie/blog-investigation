import React from "react";
import { Empty } from "antd";

import { usePostsContext } from "../store/PostsContextProvider";
import LoadMoreButton from "./buttons/LoadMoreButton";
import PostCard from "./PostCard";

function PostList() {
  const { posts } = usePostsContext();

  return (
    <>
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
    </>
  );
}

export default PostList;
