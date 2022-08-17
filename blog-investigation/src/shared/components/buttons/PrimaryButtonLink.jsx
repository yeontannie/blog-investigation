import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import Translator from "../Translator";

function PrimaryButtonLink({ linkTo, btnText }) {
  return (
    <Link to={linkTo}>
      <Button type="primary">
        <Translator text={btnText} />
      </Button>
    </Link>
  );
}

export default PrimaryButtonLink;
