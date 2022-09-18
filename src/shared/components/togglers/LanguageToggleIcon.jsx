import React from "react";

import en from "../../../assets/en.png";
import uk from "../../../assets/uk.png";

import { useUserSettingsContext } from "./../../store/UserSettingsProvider";

function LanguageToggleIcon() {
  const { language, toggleLanguage } = useUserSettingsContext();

  const handleLanguage = (e) => {
    e.target.name === "en" ? toggleLanguage("uk") : toggleLanguage("en");
  };

  return (
    <span>
      {language === "uk" ? (
        <img
          src={uk}
          alt="uk"
          name="uk"
          style={{ height: "20px" }}
          onClick={handleLanguage}
        />
      ) : (
        <img
          src={en}
          alt="en"
          name="en"
          style={{ height: "20px" }}
          onClick={handleLanguage}
        />
      )}
    </span>
  );
}

export default LanguageToggleIcon;
