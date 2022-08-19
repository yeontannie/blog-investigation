import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import Translator from "../../shared/components/Translator";

function BackToPostsButton() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="back-to-posts">
      <ArrowLeftOutlined style={{ marginRight: "8px" }} />
      <span onClick={handleClick}>
        <Translator text="Back to Posts" />
      </span>
    </div>
  );
}

export default BackToPostsButton;
