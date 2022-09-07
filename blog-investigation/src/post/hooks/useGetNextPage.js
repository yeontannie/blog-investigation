import { useParams, useNavigate } from "react-router-dom";

import { useLoading } from "../../shared/hooks/useLoading";
import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useGetNextPage = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const { posts, setAllPosts, setToken } = usePostsContext();
  const { isLoading, toggleLoading } = useLoading();

  const concatPosts = (nextPagePosts) => {
    setAllPosts(posts.concat(nextPagePosts));
  };

  const getNextPage = (token) => {
    toggleLoading();
    PostApiService.getNextPage(blogId, token)
      .then((response) => {
        response.data.items && concatPosts(response.data.items);
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
  };

  return { getNextPage, isLoading };
};
