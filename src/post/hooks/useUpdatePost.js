import { useNavigate } from "react-router-dom";
import { message } from "antd";

import Translator from "../../shared/components/Translator";
import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useUpdatePost = () => {
  const navigate = useNavigate();
  const { updatePost } = usePostsContext();

  const editPost = (blogId, postId, model) => {
    PostApiService.updatePost(blogId, postId, model)
      .then((response) => {
        updatePost(response.data);
        message.success(<Translator text="Updated successfully" />);
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
