import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { postId } = useParams();
  return <div>Post #{postId}</div>;
}

export default Post;
