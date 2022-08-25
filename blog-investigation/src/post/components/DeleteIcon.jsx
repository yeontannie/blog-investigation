import React from "react";
import { useParams } from "react-router-dom";

import { Popconfirm } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import { useDeletePost } from "../hooks/useDeletePost";

export default function DeleteIcon({ postId }) {
  const { blogId } = useParams();
  const {
    isConfirmLoading,
    removePost,
    isVisible,
    showPopconfirm,
    handleCancel,
  } = useDeletePost();

  const confirm = () => {
    removePost(blogId, postId);
  };

  return (
    <Popconfirm
      title="Are you sure to delete this post?"
      visible={isVisible}
      onConfirm={confirm}
      okText="Yes"
      okButtonProps={{
        loading: isConfirmLoading,
      }}
      onCancel={handleCancel}
    >
      <DeleteFilled className="post-icon" onClick={showPopconfirm} />
    </Popconfirm>
  );
}
