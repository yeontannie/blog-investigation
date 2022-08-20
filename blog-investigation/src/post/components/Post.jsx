import React from "react";
import { Card } from "antd";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Markup } from "interweave";

import { useGetPost } from "../hooks/useGetPost";
import Translator from "../../shared/components/Translator";
import Spinner from "../../shared/components/Spinner";
import { useUserSettingsContext } from "../../shared/store/UserSettingsProvider";
import BackToPostsButton from "./BackToPostsButton";

function Post() {
  const { blogId, postId } = useParams();

  const { theme } = useUserSettingsContext();
  const { post, isLoading } = useGetPost(blogId, postId);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && <BackToPostsButton />}
      {!isLoading && post && (
        <Card className={`single-post-card-${theme}`}>
          <h3 className="single-post-title" style={{ color: "#212121" }}>
            <Translator text={post.title} />
          </h3>
          <span className="single-post-date">
            <Translator
              text={moment(post.published.toString()).format("MMMM DD, YYYY")}
            />
          </span>
          <p className="single-post-content">
            <Markup content={post.content} />
          </p>
        </Card>
      )}
    </div>
  );
}

export default Post;
