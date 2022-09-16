import React, { useEffect } from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { GoogleLogin } from "react-google-login";

import { CLIENT_ID } from "../../keys.env";
import AuthService from "../services/authService";
import { useGapiAuth } from "../hooks/useGapiAuth";
import Translator from "../components/Translator";

function Login() {
  const { onSuccessLogin, onFailureLogin } = useGapiAuth();

  useEffect(() => {
    AuthService.initClient();
  }, []);

  return (
    <span>
      <GoogleLogin
        render={(renderProps) => (
          <Button
            className="login-btn"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GoogleOutlined style={{ color: "#141414" }} />
            <span style={{ color: "#141414" }}>
              <Translator text="Login" />
            </span>
          </Button>
        )}
        clientId={CLIENT_ID}
        onSuccess={onSuccessLogin}
        onFailure={onFailureLogin}
        cookiePolicy={"single_host_origin"}
      />
    </span>
  );
}

export default Login;
