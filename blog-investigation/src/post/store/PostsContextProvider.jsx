import React, { useReducer, useContext, useMemo } from "react";

import { PostsContext } from "./context";
import postsReducer, { postsInitialState } from "./reducer";

const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, postsInitialState);

  const postsContextValue = useMemo(() => {
    return {
      posts: state.posts,
      token: state.nextPageToken,
      setAllPosts: (posts) =>
        dispatch({ type: "SET_ALL_POSTS", payload: { posts } }),

      setToken: (token) => dispatch({ type: "SET_TOKEN", payload: { token } }),

      createPost: (newPost) =>
        dispatch({ type: "CREATE_POST", payload: { newPost } }),

      updatePost: (updatedPost) =>
        dispatch({ type: "UPDATE_POST", payload: { updatedPost } }),

      deletePost: (deletedPostId) =>
        dispatch({ type: "DELETE_POST", payload: { deletedPostId } }),
    };
  }, [state.posts, dispatch]);

  return (
    <PostsContext.Provider value={postsContextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => {
  return useContext(PostsContext);
};

export default PostsContextProvider;
