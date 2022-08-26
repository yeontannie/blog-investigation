import { useState } from "react";

export const usePopconfirm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopconfirm = () => {
    setIsVisible(true);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return { isVisible, showPopconfirm, handleCancel };
};
