import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useLoading } from "../../shared/hooks/useLoading";
import PostApiService from "../postApiService";
import { usePostsContext } from "../store/PostsContextProvider";

export const useGetPost = () => {
  const navigate = useNavigate();
  const { blogId, postId } = useParams();

  const { posts, setSinglePost } = usePostsContext();
  const { isLoading, toggleLoading } = useLoading();

  useEffect(() => {
    toggleLoading();
    if (posts) {
      const post = posts.find((p) => p.id === postId);
      if (post) {
        setSinglePost(post);
        toggleLoading();
      } else {
        navigate(`/blogs/${blogId}/posts`);
      }
    } else {
      PostApiService.getPost(blogId, postId)
        .then((response) => {
          setSinglePost(response.data);
        })
        .catch((error) => {
          navigate("/error", {
            state: {
              code: error.response.data.error.code,
              message: error.response.data.error.message,
            },
          });
        })
        .finally(() => toggleLoading);
    }
  }, [blogId, postId, posts, navigate]);

  return { isLoading };
};
