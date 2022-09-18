export const userSettingsInitialState = {
  theme: localStorage.getItem("theme") || "light",
  language: localStorage.getItem("language") || "uk",
  isLoggedIn: localStorage.getItem("token") ? true : false,
};

const userSettingsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_THEME":
      const newTheme = payload.isChecked ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      return {
        ...state,
        theme: newTheme,
      };

    case "TOGGLE_LANGUAGE":
      localStorage.setItem("language", payload.language);

      return {
        ...state,
        language: payload.language,
      };

    case "SET_IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: payload.isLoggedIn,
      };

    default:
      return userSettingsInitialState;
  }
};

export default userSettingsReducer;
