import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PostApiService from "../postApiService";

export const useGetPost = (blogId, postId) => {
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    PostApiService.getPost(blogId, postId)
      .then((response) => setPost(response.data))
      .catch((error) => {
        console.log(error);
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      })
      .finally(() => setIsLoading(false));
  }, [blogId, postId, navigate]);

  return { post, isLoading };
};
