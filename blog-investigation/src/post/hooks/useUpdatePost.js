import { useNavigate } from "react-router-dom";
import { message } from "antd";

import PostApiService from "../postApiService";
import { usePostsContext } from "../store/PostsContextProvider";

export const useUpdatePost = () => {
  const navigate = useNavigate();
  const { updatePost } = usePostsContext();

  const editPost = (blogId, postId, model) => {
    PostApiService.updatePost(blogId, postId, model)
      .then((response) => {
        updatePost(response.data);
        message.success("Updated successfully");
      })
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      });
  };

  return { editPost };
};
