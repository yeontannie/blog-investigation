import React from "react";
import { Form, Input } from "antd";

import Translator from "../../../shared/components/Translator";

function ModalTitleInput({ title, onChange }) {
  const handleChange = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };

  return (
    <Form.Item label={<Translator text="Title" />}>
      <Input type="text" value={title} onChange={handleChange} />
    </Form.Item>
  );
}

export default ModalTitleInput;
