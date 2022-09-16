import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLoading } from "../../shared/hooks/useLoading";
import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useGetPosts = (blogId) => {
  const navigate = useNavigate();

  const { setAllPosts, setToken } = usePostsContext();
  const { isLoading, toggleLoading } = useLoading();

  useEffect(() => {
    toggleLoading();
    setAllPosts([]);
    PostApiService.getPosts(blogId)
      .then((response) => {
        response.data.items && setAllPosts(response.data.items);
        response.data.nextPageToken && setToken(response.data.nextPageToken);
      })
      .catch((error) => {
        navigate("/error", {
          state: {
            code: error.response.data.error.code,
            message: error.response.data.error.message,
          },
        });
      })
      .finally(() => toggleLoading());
  }, [blogId, navigate]);

  return { isLoading };
};
