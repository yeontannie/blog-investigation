import { useState, useEffect } from "react";

export const useWindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 445;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width, breakPoint };
};
