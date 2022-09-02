import React, { useState } from "react";
import { Modal, Form } from "antd";

import Translator from "../../../shared/components/Translator";
import ModalTitleInput from "./ModalTitleInput";
import ModalContentInput from "./ModalContentInput";

import { useParams } from "react-router-dom";
import { useCreatePost } from "../../hooks/useCreatePost";
import { useUpdatePost } from "../../hooks/useUpdatePost";

function PostModal({ isCreate, isVisible, toggleModal, currentPost }) {
  const { blogId } = useParams();

  const { addPost } = useCreatePost();
  const { editPost } = useUpdatePost();

  const [post, setPost] = useState(currentPost);

  const handleCancel = () => {
    toggleModal();
  };

  const handleOk = () => {
    toggleModal();

    const model = {
      kind: "blogger#post",
      blog: {
        id: blogId,
      },
      title: post.title,
      content: post.content,
    };

    isCreate ? addPost(blogId, model) : editPost(post.blog.id, post.id, post);
    isCreate && setPost({ title: "", content: "" });
  };

  return (
    <Modal
      width={600}
      visible={isVisible}
      title={<Translator text={isCreate ? "Create Post" : "Edit Post"} />}
      okText={<Translator text="Save" />}
      cancelText={<Translator text="Cancel" />}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <ModalTitleInput title={post.title} onChange={setPost} />
        <ModalContentInput content={post.content} onChange={setPost} />
      </Form>
    </Modal>
  );
}

export default PostModal;
