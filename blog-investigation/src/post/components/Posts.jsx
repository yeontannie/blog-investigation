import React, { useState } from "react";
import { Empty, Pagination } from "antd";
import { useParams } from "react-router-dom";

import Spinner from "../../shared/components/Spinner";
import { usePostsContext } from "../store/PostsContextProvider";

import { useGetPosts } from "../hooks/useGetPosts";
import { useGetNextPage } from "../hooks/useGetNextPage";

import CreatePostButton from "./buttons/CreatePostButton";
import PostCard from "./PostCard";
import SearchPostsInput from "./SearchPostsInput";

const PAGE_SIZE = 10;

function Posts() {
  const { blogId } = useParams();

  const { posts, token, setToken } = usePostsContext();
  const { isLoading } = useGetPosts(blogId);
  const { getNextPage } = useGetNextPage();

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsNum, setCardsNum] = useState({ from: 0, to: PAGE_SIZE });

  const handleChange = (page) => {
    setCurrentPage(page);
    token && getNextPage(token);
    setCardsNum(() => {
      return {
        from: (page - 1) * PAGE_SIZE,
        to: page * PAGE_SIZE,
      };
    });
    setToken("");
  };

  return (
    <div>
      <Spinner isLoading={isLoading}>
        <div className="posts-header">
          <CreatePostButton />
          <SearchPostsInput />
        </div>
        {posts.length === 0 && <Empty className="empty" />}
        {posts.length > 0 && (
          <div className="post-card-list">
            {posts.slice(cardsNum.from, cardsNum.to).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        <Pagination
          style={{ marginLeft: "16px" }}
          total={JSON.parse(localStorage.getItem("postsNum"))}
          current={currentPage}
          onChange={handleChange}
          pageSize={PAGE_SIZE}
          hideOnSinglePage
        />
      </Spinner>
    </div>
  );
}

export default Posts;
