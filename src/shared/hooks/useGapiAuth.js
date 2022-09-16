import { useUserSettingsContext } from "../store/UserSettingsProvider";

export const useGapiAuth = () => {
  const { setIsLoggedIn } = useUserSettingsContext();

  const onSuccessLogin = (res) => {
    setIsLoggedIn(true);
    localStorage.setItem("userData", JSON.stringify(res.profileObj));
    localStorage.setItem("token", res.accessToken);
  };

  const onFailureLogin = () => {
    localStorage.setItem("token", "");
  };

  const onSuccessLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("userData");
    localStorage.setItem("token", "");
  };

  return { onSuccessLogin, onFailureLogin, onSuccessLogout };
};
