import React from "react";
import { Result } from "antd";
import { useLocation } from "react-router-dom";

import Translator from "./Translator";
import PrimaryButtonLink from "./buttons/PrimaryButtonLink";

function Error() {
  const { state } = useLocation();
  const { code, message } = state;

  return (
    <div className="error-page">
      <Result style={{ padding: "0" }} status={code} />
      <h1>{code}</h1>
      <p>
        <Translator text={message} />
      </p>
      <PrimaryButtonLink linkTo="/" btnText="Back Home" />
    </div>
  );
}

export default Error;
