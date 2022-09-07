import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import Translator from "../Translator";

function ButtonLink({ btnType, linkTo, btnText, num }) {
  const saveNum = () => {
    localStorage.setItem("postsNum", JSON.stringify(num));
  };

  return (
    <Link to={linkTo} onClick={saveNum}>
      <Button type={btnType}>
        <Translator text={btnText} />
      </Button>
    </Link>
  );
}

export default ButtonLink;
