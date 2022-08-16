import React from "react";
import { Card } from "antd";

import PrimaryButtonLink from "../../shared/components/buttons/PrimaryButtonLink";
import Translator from "../../shared/components/Translator";
import DisabledButton from "../../shared/components/buttons/DisabledButton";

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
            <PrimaryButtonLink linkTo="/posts" btnText="SHOW" />
          ) : (
            <DisabledButton btnText="Nothing to look at" />
          )}
        </p>
      </div>
    </Card>
  );
}

export default BlogCard;
