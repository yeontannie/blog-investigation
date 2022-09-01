export const postsInitialState = {
  posts: [],
};

const postsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ALL_POSTS":
      return {
        posts: payload.posts,
      };

    case "CREATE_POST":
      const addPost = state.posts.concat(payload.newPost);

      return {
        posts: addPost,
      };

    case "UPDATE_POST":
      const updatePosts = state.posts.map((post) =>
        post.id === payload.updatedPost.id ? payload.updatedPost : post
      );

      return {
        posts: updatePosts,
      };

    case "DELETE_POST":
      const deletePost = state.posts.filter(
        (currentPost) => currentPost.id !== payload.deletedPostId
      );

      return {
        posts: deletePost,
      };

    default:
      return postsInitialState;
  }
};

export default postsReducer;
