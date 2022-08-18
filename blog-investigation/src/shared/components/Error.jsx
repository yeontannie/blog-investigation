import React from "react";
import { Result } from "antd";
import { useLocation } from "react-router-dom";

import Translator from "./Translator";
import ButtonLink from "./buttons/ButtonLink";

function Error() {
  const { state } = useLocation();
  const { code, message } = state;

  return (
    <div className="error-page">
      <Result style={{ padding: "0" }} status="404" />
      <h1>{code}</h1>
      <p>
        <Translator text={message} />
      </p>
      <ButtonLink type="primary" linkTo="/" btnText="Back Home" />
    </div>
  );
}

export default Error;
