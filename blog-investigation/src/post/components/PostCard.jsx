import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import moment from "moment";

import { useUserSettingsContext } from "../../shared/store/UserSettingsProvider";
import Translator from "../../shared/components/Translator";
import Icons from "../components/icons/Icons";

const { Meta } = Card;

function PostCard(props) {
  const { theme, isLoggedIn } = useUserSettingsContext();

  const published = moment(props.published.toString()).format("MMMM DD, YYYY");

  return (
    <Card className={`post-card-${theme}`}>
      <Link to={`${props.id}`}>
        <Meta
          className="post-card-meta"
          title={<Translator text={props.title || "No Content"} />}
          description={<Translator text={published} />}
        />
      </Link>
      {isLoggedIn && <Icons post={props.post} />}
    </Card>
  );
}

export default PostCard;
