import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import Translator from "../Translator";

function PrimaryBtn({ linkTo, btnText }) {
  return (
    <Button type="primary">
      <Link to={linkTo}>
        <Translator text={btnText} />
      </Link>
    </Button>
  );
}

export default PrimaryBtn;
