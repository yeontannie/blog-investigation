import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { GoogleLogout } from "react-google-login";

import { CLIENT_ID } from "../../keys.env";
import { useGapiAuth } from "../hooks/useGapiAuth";
import Translator from "../components/Translator";

function Logout() {
  const { onSuccessLogout } = useGapiAuth();

  return (
    <span>
      <GoogleLogout
        render={(renderProps) => (
          <Button
            className="logout-btn"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GoogleOutlined />
            <span>
              <Translator text="Logout" />
            </span>
          </Button>
        )}
        clientId={CLIENT_ID}
        onLogoutSuccess={onSuccessLogout}
      />
    </span>
  );
}

export default Logout;
