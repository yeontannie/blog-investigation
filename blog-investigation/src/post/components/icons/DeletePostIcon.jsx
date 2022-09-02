import React from "react";
import { useParams } from "react-router-dom";

import { Popconfirm } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import Translator from "../../../shared/components/Translator";
import { usePopconfirm } from "../../../shared/hooks/usePopconfirm";
import { useDeletePost } from "../../hooks/useDeletePost";

export default function ConfirmDeleteIcon({ postId }) {
  const { blogId } = useParams();

  const { isLoading, removePost } = useDeletePost();
  const { isPopconfirmVisible, togglePopconfirm } = usePopconfirm();

  const handleOk = () => {
    removePost(blogId, postId);
  };

  const handleCancel = () => {
    togglePopconfirm();
  };

  return (
    <>
      <DeleteFilled className="post-icon" onClick={togglePopconfirm} />
      <Popconfirm
        title={<Translator text="Are you sure to delete this post?" />}
        visible={isPopconfirmVisible}
        okText={<Translator text="Yes" />}
        onConfirm={handleOk}
        okButtonProps={{
          loading: isLoading,
        }}
        cancelText={<Translator text="Cancel" />}
        onCancel={handleCancel}
      />
    </>
  );
}
