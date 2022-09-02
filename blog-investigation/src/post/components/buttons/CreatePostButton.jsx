import React from "react";

import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Translator from "../../../shared/components/Translator";
import { useModal } from "../../hooks/useModal";
import PostModal from "../modal/PostModal";

function CreatePostButton() {
  const { isModalVisible, toggleModal } = useModal();

  return (
    <>
      <Button
        type="primary"
        size="large"
        shape="round"
        onClick={toggleModal}
        style={{ margin: "0 16px" }}
      >
        <PlusCircleOutlined />
        <span>
          <Translator text="New post" />
        </span>
      </Button>
      <PostModal
        isCreate={true}
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        currentPost={{
          title: "",
          content: "",
        }}
      />
    </>
  );
}

export default CreatePostButton;
