import React from "react";
import { useParams } from "react-router-dom";

import { Popconfirm } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import Translator from "../../../shared/components/Translator";
import { useDeletePost } from "../../hooks/useDeletePost";
import { usePopconfirm } from "../../hooks/usePopconfirm";

export default function ConfirmDeleteIcon({ postId }) {
  const { blogId } = useParams();

  const { isConfirmLoading, removePost } = useDeletePost();
  const { isVisible, showPopconfirm, handleCancel } = usePopconfirm();

  const confirm = () => {
    removePost(blogId, postId);
  };

  return (
    <Popconfirm
      title={<Translator text="Are you sure to delete this post?" />}
      visible={isVisible}
      okText={<Translator text="Yes" />}
      onConfirm={confirm}
      okButtonProps={{
        loading: isConfirmLoading,
      }}
      cancelText={<Translator text="Cancel" />}
      onCancel={handleCancel}
    >
      <DeleteFilled className="post-icon" onClick={showPopconfirm} />
    </Popconfirm>
  );
}
