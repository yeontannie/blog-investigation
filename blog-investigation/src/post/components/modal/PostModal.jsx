import React, { useState } from "react";
import { Modal, Form } from "antd";

import Translator from "../../../shared/components/Translator";
import ModalTitleInput from "./ModalTitleInput";
import ModalContentInput from "./ModalContentInput";

import { useParams } from "react-router-dom";
import { useCreatePost } from "../../hooks/useCreatePost";
import { useUpdatePost } from "../../hooks/useUpdatePost";

function PostModal(props) {
  const { blogId } = useParams();

  const { addPost } = useCreatePost();
  const { editPost } = useUpdatePost();

  const [post, setPost] = useState(props.post);

  const handleCancel = () => {
    props.toggleModal();
  };

  const handleOk = () => {
    props.toggleModal();

    const model = {
      kind: "blogger#post",
      blog: {
        id: blogId,
      },
      title: post.title,
      content: post.content,
    };

    props.title === "Create Post"
      ? addPost(blogId, model)
      : editPost(post.blog.id, post.id, post);

    props.title === "Create Post" && setPost({ title: "", content: "" });
  };

  return (
    <Modal
      width={600}
      visible={props.isVisible}
      title={<Translator text={props.title} />}
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
