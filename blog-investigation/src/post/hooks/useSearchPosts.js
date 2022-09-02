import PostApiService from "../postApiService";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePostsContext } from "../store/PostsContextProvider";

export const useSearchPosts = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const { setAllPosts } = usePostsContext();
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (searchText) => {
    setIsLoading(true);
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
      .finally(() => setIsLoading(false));
  };

  return { isLoading, onSearch };
};
