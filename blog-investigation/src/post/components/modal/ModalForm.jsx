import React from "react";
import { Form } from "antd";

import ModalTitleInput from "./ModalTitleInput";
import ModalContentInput from "./ModalContentInput";

export default function ModalForm({ post, setPost }) {
  return (
    <Form
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
    >
      <ModalTitleInput title={post.title} onChange={setPost} />
      <ModalContentInput content={post.content} onChange={setPost} />
    </Form>
  );
}
