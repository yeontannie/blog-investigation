import React from "react";

import EditPostIcon from "./EditPostIcon";
import ConfirmDeleteIcon from "./ConfirmDeleteIcon";

function Icons({ post }) {
  return (
    <div className="post-icons">
      <EditPostIcon post={post} />
      <ConfirmDeleteIcon postId={post.id} />
    </div>
  );
}

export default Icons;
