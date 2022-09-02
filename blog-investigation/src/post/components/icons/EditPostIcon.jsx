import React from "react";
import { EditFilled } from "@ant-design/icons";

import { useModal } from "../../hooks/useModal";
import PostModal from "../modal/PostModal";

function EditPostIcon({ post }) {
  const { isModalVisible, toggleModal } = useModal();

  return (
    <>
      <EditFilled className="post-icon" onClick={toggleModal} />
      <PostModal
        isCreate={false}
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        currentPost={post}
      />
    </>
  );
}

export default EditPostIcon;
