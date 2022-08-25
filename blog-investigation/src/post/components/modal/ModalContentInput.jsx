import React from "react";
import { Form } from "antd";
import { DefaultEditor } from "react-simple-wysiwyg";

import Translator from "../../../shared/components/Translator";

function ModalContentInput({ content, onChange }) {
  const handleChange = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        content: e.target.value,
      };
    });
  };

  return (
    <Form.Item label={<Translator text="Content" />}>
      <DefaultEditor value={content} onChange={handleChange} />
    </Form.Item>
  );
}

export default ModalContentInput;
