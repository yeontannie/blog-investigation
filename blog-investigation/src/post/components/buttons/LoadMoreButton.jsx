import React from "react";
import { Button, Tooltip } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

import { usePostsContext } from "../../store/PostsContextProvider";
import { useGetNextPage } from "../../hooks/useGetNextPage";

export default function LoadMoreButton() {
  const { getNextPage } = useGetNextPage();
  const { token, setToken } = usePostsContext();

  const fetchNextPage = () => {
    token && getNextPage(token);
    setToken("");
  };

  return (
    <div className="load-more-posts">
      {token && (
        <Tooltip title="Load more">
          <Button
            shape="circle"
            icon={<ReloadOutlined />}
            size="large"
            onClick={fetchNextPage}
          />
        </Tooltip>
      )}
    </div>
  );
}
