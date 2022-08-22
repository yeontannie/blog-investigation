import React from "react";
import { EditFilled } from "@ant-design/icons";
import DeleteIcon from "./DeleteIcon";

function Icons({ postId }) {
  return (
    <div className="post-icons">
      <EditFilled className="post-icon" />
      <DeleteIcon postId={postId} />
    </div>
  );
}

export default Icons;
