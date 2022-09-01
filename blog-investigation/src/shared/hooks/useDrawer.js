import { useState } from "react";

export const useDrawer = () => {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible((prev) => !prev);
  };

  return { toggleDrawer, visible };
};
