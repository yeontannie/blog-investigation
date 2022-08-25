import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useDeletePost = () => {
  const navigate = useNavigate();
  const { deletePost } = usePostsContext();

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
    setIsConfirmLoading(false);
  };

  const removePost = (blogId, postId) => {
    setIsConfirmLoading(true);
    PostApiService.deletePost(blogId, postId)
      .then(() => {
        deletePost(postId);
        message.success("Deleted successfully");
      })
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      })
      .finally(() => setIsConfirmLoading(false));
  };

  return {
    isConfirmLoading,
    removePost,
    isVisible,
    showPopconfirm,
    handleCancel,
  };
};
