import React from "react";
import { Popconfirm } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";

import { useDeletePost } from "../hooks/useDeletePost";

export default function DeleteIcon({ postId }) {
  const { blogId } = useParams();
  const { confirmDelete } = useDeletePost(blogId, postId);

  return (
    <Popconfirm
      title="Are you sure to delete this post?"
      onConfirm={confirmDelete}
      okText="Yes"
    >
      <DeleteFilled className="post-icon" />
    </Popconfirm>
  );
}
