import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Form } from "antd";

import Translator from "../../../shared/components/Translator";
import { useCreatePost } from "../../hooks/useCreatePost";
import CreatePostButton from "../buttons/CreatePostButton";

import ModalTitleInput from "./ModalTitleInput";
import ModalContentInput from "./ModalContentInput";

function ModalAddPost() {
  const { blogId } = useParams();
  const { addPost } = useCreatePost();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setNewPost({ title: "", content: "" });
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const model = {
      kind: "blogger#post",
      blog: {
        id: blogId,
      },
      title: newPost.title,
      content: newPost.content,
    };

    addPost(blogId, model);
    setNewPost({ title: "", content: "" });
  };

  return (
    <>
      <CreatePostButton show={showModal} />
      <Modal
        width={600}
        visible={isModalVisible}
        title={<Translator text="Create Post" />}
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
          <ModalTitleInput title={newPost.title} onChange={setNewPost} />
          <ModalContentInput content={newPost.content} onChange={setNewPost} />
        </Form>
      </Modal>
    </>
  );
}

export default ModalAddPost;
