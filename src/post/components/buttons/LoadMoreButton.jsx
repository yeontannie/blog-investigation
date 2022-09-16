import React from "react";
import { Button, Tooltip } from "antd";
import { ReloadOutlined, LoadingOutlined } from "@ant-design/icons";

import { usePostsContext } from "../../store/PostsContextProvider";
import { useGetNextPage } from "../../hooks/useGetNextPage";

export default function LoadMoreButton() {
  const { getNextPage, isLoading } = useGetNextPage();
  const { token } = usePostsContext();

  const fetchNextPage = () => {
    token && getNextPage(token);
  };

  return (
    <div className="load-more-posts">
      {token && (
        <Tooltip title="Load more">
          <Button
            shape="circle"
            icon={isLoading ? <LoadingOutlined /> : <ReloadOutlined />}
            size="large"
            onClick={fetchNextPage}
          />
        </Tooltip>
      )}
    </div>
  );
}
