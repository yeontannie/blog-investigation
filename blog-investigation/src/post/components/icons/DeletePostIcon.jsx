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
  const { isPopconfirmVisible, setIsPopconfirmVisible, showPopconfirm } =
    usePopconfirm();

  const handleOk = () => {
    removePost(blogId, postId);
  };

  const handleCancel = () => {
    setIsPopconfirmVisible(false);
  };

  return (
    <>
      <DeleteFilled className="post-icon" onClick={showPopconfirm} />
      <Popconfirm
        title={<Translator text="Are you sure to delete this post?" />}
        visible={isPopconfirmVisible}
        okText={<Translator text="Yes" />}
        onConfirm={handleOk}
        okButtonProps={{
          loading: isConfirmLoading,
        }}
        cancelText={<Translator text="Cancel" />}
        onCancel={handleCancel}
      />
    </>
  );
}
