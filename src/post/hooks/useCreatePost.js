import { message } from "antd";
import { useNavigate } from "react-router-dom";

import PostApiService from "../postApiService";
import { usePostsContext } from "../store/PostsContextProvider";

export const useCreatePost = () => {
  const navigate = useNavigate();
  const { createPost } = usePostsContext();

  const addPost = (blogId, model) => {
    PostApiService.createPost(blogId, model)
      .then((response) => {
        createPost(response.data);
        message.success("Created successfully");
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

  return { addPost };
};
