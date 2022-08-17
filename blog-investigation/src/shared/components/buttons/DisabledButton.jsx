import React from "react";
import { Button } from "antd";

import Translator from "../Translator";

function DisabledButton({ btnText }) {
  return (
    <Button disabled>
      <Translator text={btnText} />
    </Button>
  );
}

export default DisabledButton;
