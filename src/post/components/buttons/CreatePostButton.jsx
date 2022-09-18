import React from "react";

import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import Translator from "../../../shared/components/Translator";
import { useModal } from "../../../shared/hooks/useModal";
import PostModal from "../PostModal";
import { useWindowResize } from "../../../shared/hooks/useWindowResize";

function CreatePostButton() {
  const { isModalVisible, toggleModal } = useModal();
  const { width, breakPoint } = useWindowResize();

  return (
    <>
      <Button type="primary" size="large" shape="round" onClick={toggleModal}>
        <PlusCircleOutlined />
        {width > breakPoint && (
          <span>
            <Translator text="New post" />
          </span>
        )}
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

export default React.memo(CreatePostButton);
