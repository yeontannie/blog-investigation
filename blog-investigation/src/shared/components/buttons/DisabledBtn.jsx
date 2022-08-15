import React from "react";
import { Button } from "antd";

import Translator from "../Translator";

function DisabledBtn({ btnText }) {
  return (
    <Button disabled>
      <Translator text={btnText} />
    </Button>
  );
}

export default DisabledBtn;
