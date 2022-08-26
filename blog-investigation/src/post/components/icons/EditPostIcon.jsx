import React, { useState } from "react";
import { EditFilled } from "@ant-design/icons";

import { useModalUpdate } from "../../hooks/useModalUpdate";
import ModalPost from "../modal/ModalPost";

function EditPostIcon({ post }) {
  const { showModal, isModalVisible, handleOk, handleCancel } =
    useModalUpdate();

  const [editedPost, setEditedPost] = useState(post);

  return (
    <>
      <EditFilled className="post-icon" onClick={showModal} />
      <ModalPost
        title="Edit Post"
        isVisible={isModalVisible}
        ok={() => handleOk(editedPost)}
        cancel={handleCancel}
        post={editedPost}
        setPost={setEditedPost}
      />
    </>
  );
}

export default EditPostIcon;
