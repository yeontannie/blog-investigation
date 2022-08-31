import React from "react";
import { EditFilled } from "@ant-design/icons";

import { useModal } from "../../hooks/useModal";
import PostModal from "../modal/PostModal";

function EditPostIcon({ post }) {
  const { isModalVisible, setIsModalVisible, showModal } = useModal();

  return (
    <>
      <EditFilled className="post-icon" onClick={showModal} />
      <PostModal
        title="Edit Post"
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        post={post}
      />
    </>
  );
}

export default EditPostIcon;

// ok={handleOk}
// cancel={handleCancel}
// post={editedPost}
// setPost={setEditedPost}

// const { editPost } = useUpdatePost();
// const [editedPost, setEditedPost] = useState(post);

// const handleCancel = () => {
//   setIsModalVisible(false);
// };

// const handleOk = () => {
//   setIsModalVisible(false);
//   editPost(editedPost.blog.id, editedPost.id, editedPost);
// };
