import React from "react";
import { Input } from "antd";
import { useSearchPosts } from "../hooks/useSearchPosts";

const { Search } = Input;

export default function SearchInput() {
  const { isLoading, onSearch } = useSearchPosts();

  return (
    <Search
      placeholder="search..."
      enterButton
      size="large"
      allowClear
      loading={isLoading}
      onSearch={onSearch}
      style={{ margin: "0 16px" }}
    />
  );
}
