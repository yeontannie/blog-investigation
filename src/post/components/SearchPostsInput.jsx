import React from "react";
import { Input } from "antd";

import { useSearchPosts } from "../hooks/useSearchPosts";

const { Search } = Input;

function SearchPostsInput() {
  const { isLoading, onSearch } = useSearchPosts();

  return (
    <Search
      placeholder="Search..."
      size="large"
      allowClear
      enterButton
      loading={isLoading}
      onSearch={onSearch}
      style={{ minWidth: "20vh" }}
    />
  );
}

export default React.memo(SearchPostsInput);
