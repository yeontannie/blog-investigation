import React from "react";

import { useModalCreate } from "../hooks/useModalCreate";
import CreatePostButton from "./buttons/CreatePostButton";
import ModalPost from "./modal/ModalPost";

export default function CreatePost() {
  const {
    isModalVisible,
    showModal,
    handleOk,
    handleCancel,
    newPost,
    setNewPost,
  } = useModalCreate();

  return (
    <>
      <CreatePostButton show={showModal} />
      <ModalPost
        title="Create Post"
        isVisible={isModalVisible}
        ok={handleOk}
        cancel={handleCancel}
        post={newPost}
        setPost={setNewPost}
      />
    </>
  );
}
