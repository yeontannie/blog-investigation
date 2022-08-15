import React from "react";
import { Result } from "antd";
import { useLocation } from "react-router-dom";

import Translator from "./Translator";
import PrimaryBtn from "./buttons/PrimaryBtn";

function Error() {
  const { state } = useLocation();

  return (
    <div className="error-page">
      <Result style={{ padding: "0" }} status={state} />
      <h1>{state}</h1>
      <p>
        {state === "403" ? (
          <Translator text="Sorry, you are not authorized to access this page." />
        ) : (
          <Translator text="Sorry, the page you visited does not exist." />
        )}
      </p>
      <PrimaryBtn linkTo="/" btnText="Back Home" />
    </div>
  );
}

export default Error;
