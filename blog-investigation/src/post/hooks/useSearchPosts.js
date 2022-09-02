import { useParams, useNavigate } from "react-router-dom";

import { useLoading } from "../../shared/hooks/useLoading";
import { usePostsContext } from "../store/PostsContextProvider";
import PostApiService from "../postApiService";

export const useSearchPosts = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const { setAllPosts } = usePostsContext();
  const { isLoading, toggleLoading } = useLoading();

  const onSearch = (searchText) => {
    toggleLoading();
    PostApiService.searchPosts(blogId, searchText)
      .then((response) => {
        response.data.items
          ? setAllPosts(response.data.items)
          : setAllPosts([]);
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

  return { isLoading, onSearch };
};
