import React from "react";
import { Modal } from "antd";

import Translator from "../../../shared/components/Translator";
import ModalForm from "./ModalForm";

function ModalPost(props) {
  return (
    <Modal
      width={600}
      visible={props.isVisible}
      title={<Translator text={props.title} />}
      okText={<Translator text="Save" />}
      cancelText={<Translator text="Cancel" />}
      onOk={props.ok}
      onCancel={props.cancel}
    >
      <ModalForm post={props.post} setPost={props.setPost} />
    </Modal>
  );
}

export default ModalPost;
