import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useDeletePost = () => {
  const navigate = useNavigate();

  const { deletePost } = usePostsContext();
  const [isConfirmLoading, setIsConfirmLoading] = useState(false);

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

  return { isConfirmLoading, removePost };
};
