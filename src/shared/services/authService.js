import { gapi } from "gapi-script";
import { CLIENT_ID } from "../../keys.env";

export default class AuthService {
  static initClient() {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        client_id: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/blogger",
      });
    });
  }
}
