import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoading } from "../../shared/hooks/useLoading";
import PostApiService from "../postApiService";

export const useGetPost = (blogId, postId) => {
  const navigate = useNavigate();

  const { isLoading, toggleLoading } = useLoading();
  const [post, setPost] = useState(null);

  useEffect(() => {
    toggleLoading();
    PostApiService.getPost(blogId, postId)
      .then((response) => setPost(response.data))
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      })
      .finally(() => toggleLoading);
  }, [blogId, postId, navigate]);

  return { post, isLoading };
};
