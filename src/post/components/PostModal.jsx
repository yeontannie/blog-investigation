import React from "react";
import { useParams } from "react-router-dom";
import { Modal, Form, Input } from "antd";

import Translator from "../../shared/components/Translator";
import { DefaultEditor } from "react-simple-wysiwyg";

import { useCreatePost } from "../hooks/useCreatePost";
import { useUpdatePost } from "../hooks/useUpdatePost";

function PostModal({ isCreate, isVisible, toggleModal, currentPost }) {
  const [form] = Form.useForm();
  const { blogId } = useParams();

  const { addPost } = useCreatePost();
  const { editPost } = useUpdatePost();

  const handleCancel = () => {
    toggleModal();
  };

  const handleOk = (post) => {
    toggleModal();

    const model = {
      kind: "blogger#post",
      blog: {
        id: blogId,
      },
      title: post.title,
      content: post.content,
    };

    isCreate
      ? addPost(blogId, model)
      : editPost(currentPost.blog.id, currentPost.id, post);
  };

  const getValuesOnOk = () => {
    handleOk(form.getFieldsValue());
  };

  return (
    <Modal
      width={600}
      visible={isVisible}
      title={<Translator text={isCreate ? "Create Post" : "Edit Post"} />}
      okText={<Translator text="Save" />}
      cancelText={<Translator text="Cancel" />}
      onCancel={handleCancel}
      onOk={getValuesOnOk}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        autoComplete="off"
      >
        <Form.Item
          name="title"
          label={<Translator text="Title" />}
          initialValue={currentPost.title}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label={<Translator text="Content" />}
          initialValue={currentPost.content}
        >
          <DefaultEditor />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default React.memo(PostModal);
