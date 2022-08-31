import { useState } from "react";

export const usePopconfirm = () => {
  const [isPopconfirmVisible, setIsPopconfirmVisible] = useState(false);

  const showPopconfirm = () => {
    setIsPopconfirmVisible(true);
  };

  return { isPopconfirmVisible, setIsPopconfirmVisible, showPopconfirm };
};
