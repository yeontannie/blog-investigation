export const postsInitialState = {
  posts: [],
  nextPageToken: "",
};

const postsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ALL_POSTS":
      return {
        ...state,
        posts: payload.posts,
      };

    case "SET_TOKEN":
      return {
        ...state,
        nextPageToken: payload.token,
      };

    case "CREATE_POST":
      const addPost = state.posts.concat(payload.newPost);

      return {
        ...state,
        posts: addPost,
      };

    case "UPDATE_POST":
      const updatePosts = state.posts.map((post) =>
        post.id === payload.updatedPost.id ? payload.updatedPost : post
      );

      return {
        ...state,
        posts: updatePosts,
      };

    case "DELETE_POST":
      const deletePost = state.posts.filter(
        (currentPost) => currentPost.id !== payload.deletedPostId
      );

      return {
        ...state,
        posts: deletePost,
      };

    default:
      return postsInitialState;
  }
};

export default postsReducer;
