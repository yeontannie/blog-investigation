import { useParams, useNavigate } from "react-router-dom";

import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useGetNextPage = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const { posts, setAllPosts, setToken } = usePostsContext();

  const concatPosts = (nextPagePosts) => {
    setAllPosts(posts.concat(nextPagePosts));
  };

  const getNextPage = (token) => {
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
      });
  };

  return { getNextPage };
};
