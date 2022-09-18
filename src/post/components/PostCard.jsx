import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import moment from "moment";

import { useUserSettingsContext } from "../../shared/store/UserSettingsProvider";
import Translator from "../../shared/components/Translator";

import EditPostIcon from "./icons/EditPostIcon";
import DeletePostIcon from "./icons/DeletePostIcon";

const { Meta } = Card;

function PostCard(props) {
  const { theme, isLoggedIn } = useUserSettingsContext();

  const title =
    props.post.title.length > 8
      ? props.post.title.slice(0, 8) + "..."
      : props.post.title;

  const published = moment(props.post.published.toString()).format(
    "MMMM DD, YYYY"
  );

  return (
    <Card className={`post-card-${theme}`}>
      <Link to={`${props.post.id}`}>
        <Meta
          className="post-card-meta"
          title={<Translator text={title || "No Content"} />}
          description={<Translator text={published} />}
        />
      </Link>
      {isLoggedIn && (
        <div className="post-icons">
          <EditPostIcon post={props.post} />
          <DeletePostIcon postId={props.post.id} />
        </div>
      )}
    </Card>
  );
}

export default React.memo(PostCard);
