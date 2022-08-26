import { useState } from "react";
import { useParams } from "react-router-dom";

import { useCreatePost } from "./useCreatePost";

export const useModalCreate = () => {
  const { blogId } = useParams();
  const { addPost } = useCreatePost();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewPost({ title: "", content: "" });
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const model = {
      kind: "blogger#post",
      blog: {
        id: blogId,
      },
      title: newPost.title,
      content: newPost.content,
    };

    addPost(blogId, model);
    setNewPost({ title: "", content: "" });
  };

  return {
    isModalVisible,
    showModal,
    handleOk,
    handleCancel,
    newPost,
    setNewPost,
  };
};
