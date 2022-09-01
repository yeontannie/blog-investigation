import { useState } from "react";

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return { isModalVisible, toggleModal };
};
