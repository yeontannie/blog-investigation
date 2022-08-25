import React from "react";

import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Translator from "../../../shared/components/Translator";

function CreatePostButton({ show }) {
  return (
    <Button
      type="primary"
      size="large"
      shape="round"
      onClick={show}
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
