import { useState } from "react";

import { useUpdatePost } from "./useUpdatePost";

export const useModalUpdate = () => {
  const { editPost } = useUpdatePost();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = (editedPost) => {
    setIsModalVisible(false);
    editPost(editedPost.blog.id, editedPost.id, editedPost);
  };

  return { isModalVisible, showModal, handleCancel, handleOk };
};
