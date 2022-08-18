import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Translator from "../../shared/components/Translator";

function CreatePostButton() {
  return (
    <Button
      type="primary"
      size="large"
      shape="round"
      style={{ marginLeft: "16px" }}
    >
      <PlusCircleOutlined />
      <span>
        <Translator text="New post" />
      </span>
    </Button>
  );
}

export default CreatePostButton;
