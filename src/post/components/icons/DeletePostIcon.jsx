import React from "react";
import { Popconfirm } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import Translator from "../../../shared/components/Translator";
import { usePopconfirm } from "../../../shared/hooks/usePopconfirm";
import { useDeletePost } from "../../hooks/useDeletePost";

function ConfirmDeleteIcon({ postId }) {
  const { isLoading, removePost } = useDeletePost();
  const { isPopconfirmVisible, togglePopconfirm } = usePopconfirm();

  const handleOk = () => {
    removePost(postId);
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
        onCancel={togglePopconfirm}
      />
    </>
  );
}

export default React.memo(ConfirmDeleteIcon);
