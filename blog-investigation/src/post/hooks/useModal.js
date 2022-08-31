import { useState } from "react";

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return { isModalVisible, setIsModalVisible, showModal };
};
