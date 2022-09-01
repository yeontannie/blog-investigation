import React from "react";

import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Translator from "../../../shared/components/Translator";
import { useModal } from "../../hooks/useModal";
import PostModal from "../modal/PostModal";

function CreatePostButton() {
  const { isModalVisible, setIsModalVisible, showModal } = useModal();

  return (
    <>
      <Button
        type="primary"
        size="large"
        shape="round"
        onClick={showModal}
        style={{ marginLeft: "16px" }}
      >
        <PlusCircleOutlined />
        <span>
          <Translator text="New post" />
        </span>
      </Button>
      <PostModal
        title="Create Post"
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        post={{
          title: "",
          content: "",
        }}
      />
    </>
  );
}

export default CreatePostButton;
