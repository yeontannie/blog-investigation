import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PostApiService from "../postApiService";

export const useGetPosts = (blogId) => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    PostApiService.getPosts(blogId)
      .then((response) => response.data.items && setPosts(response.data.items))
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      })
      .finally(() => setIsLoading(false));
  }, [blogId, navigate]);

  return { posts, isLoading };
};
