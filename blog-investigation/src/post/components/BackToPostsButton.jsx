import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import Translator from "../../shared/components/Translator";
import { useUserSettingsContext } from "../../shared/store/UserSettingsProvider";

function BackToPostsButton() {
  const { blogId } = useParams();
  const { theme } = useUserSettingsContext();

  return (
    <div className={`back-to-posts-${theme}`}>
      <Link to={`/blogs/${blogId}/posts`}>
        <ArrowLeftOutlined style={{ marginRight: "8px" }} />
        <span>
          <Translator text="Back to Posts" />
        </span>
      </Link>
    </div>
  );
}

export default BackToPostsButton;
