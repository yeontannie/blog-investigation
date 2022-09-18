import React from "react";

import light from "../../../assets/light.png";
import dark from "../../../assets/dark.png";

import { useUserSettingsContext } from "../../store/UserSettingsProvider";

function ThemeToggleIcon() {
  const { theme, toggleTheme } = useUserSettingsContext();

  const handleTheme = () => {
    theme === "light" ? toggleTheme(true) : toggleTheme(false);
  };

  return (
    <span onClick={handleTheme}>
      {theme === "light" ? (
        <img src={light} alt="light mode" style={{ height: "20px" }} />
      ) : (
        <img src={dark} alt="dark mode" style={{ height: "20px" }} />
      )}
    </span>
  );
}

export default ThemeToggleIcon;
