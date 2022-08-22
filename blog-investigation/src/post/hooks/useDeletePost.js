import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useDeletePost = (blogId, postId) => {
  const navigate = useNavigate();
  const { deletePost } = usePostsContext();

  const confirmDelete = () => {
    removePost(blogId, postId);
    message.success("Deleted successfully");
  };

  const removePost = (blogId, postId) => {
    PostApiService.deletePost(blogId, postId)
      .then(() => deletePost(postId))
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      });
  };

  return { confirmDelete };
};
