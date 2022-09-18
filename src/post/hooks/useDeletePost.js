import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";

import { useLoading } from "../../shared/hooks/useLoading";
import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useDeletePost = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const { deletePost } = usePostsContext();
  const { isLoading, toggleLoading } = useLoading();

  const removePost = (postId) => {
    toggleLoading();
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
      .finally(() => toggleLoading);
  };

  return { isLoading, removePost };
};
