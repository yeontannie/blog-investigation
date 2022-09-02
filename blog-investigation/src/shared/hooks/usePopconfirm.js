import { useState } from "react";

export const usePopconfirm = () => {
  const [isPopconfirmVisible, setIsPopconfirmVisible] = useState(false);

  const togglePopconfirm = () => {
    setIsPopconfirmVisible((prev) => !prev);
  };

  return { isPopconfirmVisible, togglePopconfirm };
};
