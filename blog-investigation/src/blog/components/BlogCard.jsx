import React from "react";
import { Card } from "antd";

import ButtonLink from "../../shared/components/buttons/ButtonLink";
import Translator from "../../shared/components/Translator";

function BlogCard(props) {
  return (
    <Card title={<Translator text={props.name} />} className="blog-card">
      <p>{<Translator text={props.description} />}</p>
      <div className="blog-card-content">
        <p>
          <Translator text="Total posts:" /> {props.postsNum}
        </p>
        <p>
          {props.postsNum > 0 ? (
            <ButtonLink
              btnType="primary"
              linkTo={`${props.id}/posts`}
              btnText="SHOW"
            />
          ) : (
            <ButtonLink
              linkTo={`${props.id}/posts`}
              btnText="Nothing to look at"
            />
          )}
        </p>
      </div>
    </Card>
  );
}

export default BlogCard;
