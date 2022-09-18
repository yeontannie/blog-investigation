import React from "react";
import { Card } from "antd";
import moment from "moment";
import { Markup } from "interweave";

import { useUserSettingsContext } from "../../shared/store/UserSettingsProvider";
import Translator from "../../shared/components/Translator";
import Spinner from "../../shared/components/Spinner";

import { useGetPost } from "../hooks/useGetPost";
import BackToPostsButton from "./buttons/BackToPostsButton";

import DeletePostIcon from "./icons/DeletePostIcon";
import EditPostIcon from "./icons/EditPostIcon";
import { usePostsContext } from "../store/PostsContextProvider";

function Post() {
  const { theme, isLoggedIn } = useUserSettingsContext();
  const { singlePost } = usePostsContext();

  const { isLoading } = useGetPost();

  return (
    <div>
      <Spinner isLoading={isLoading}>
        <BackToPostsButton />
        {Object.keys(singlePost).length > 0 && (
          <Card className={`single-post-card-${theme}`}>
            <span className="single-post-header">
              <h3 className="single-post-title" style={{ color: "#212121" }}>
                <Translator text={singlePost.title} />
              </h3>
              {isLoggedIn && (
                <div className="post-icons">
                  <EditPostIcon post={singlePost} />
                  <DeletePostIcon postId={singlePost.id} />
                </div>
              )}
            </span>
            <span className="single-post-date">
              <Translator
                text={moment(singlePost.published.toString()).format(
                  "MMMM DD, YYYY"
                )}
              />
            </span>
            <p className="single-post-content">
              <Markup content={singlePost.content} />
            </p>
          </Card>
        )}
      </Spinner>
    </div>
  );
}

export default Post;
