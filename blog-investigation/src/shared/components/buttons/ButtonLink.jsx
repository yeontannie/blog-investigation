import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import Translator from "../Translator";

function ButtonLink({ btnType, linkTo, btnText }) {
  return (
    <Link to={linkTo}>
      <Button type={btnType}>
        <Translator text={btnText} />
      </Button>
    </Link>
  );
}

export default ButtonLink;
