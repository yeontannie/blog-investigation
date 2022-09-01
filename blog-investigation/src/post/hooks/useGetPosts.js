import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PostApiService from "../postApiService";
import { usePostsContext } from "../store/PostsContextProvider";

export const useGetPosts = (blogId) => {
  const navigate = useNavigate();

  const { setAllPosts } = usePostsContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setAllPosts([]);
    PostApiService.getPosts(blogId)
      .then((response) => {
        response.data.items && setAllPosts(response.data.items);
      })
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

  return { isLoading };
};
