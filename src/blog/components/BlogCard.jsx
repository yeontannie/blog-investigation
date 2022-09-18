import React from "react";
import { Card } from "antd";

import ButtonLink from "../../shared/components/buttons/ButtonLink";
import Translator from "../../shared/components/Translator";

function BlogCard(props) {
  return (
    <Card title={<Translator text={props.name} />} className="blog-card">
      <p className="blog-card-description">
        {<Translator text={props.description} />}
      </p>
      <div className="blog-card-content">
        <p>
          <Translator text="Total posts:" /> {props.postsNum}
        </p>
        <p>
          <ButtonLink linkTo={`${props.id}/posts`} btnText="SHOW" />
        </p>
      </div>
    </Card>
  );
}

export default BlogCard;
