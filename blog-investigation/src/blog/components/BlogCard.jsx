import React from "react";
import { Card } from "antd";

import PrimaryBtn from "../../shared/components/buttons/PrimaryBtn";
import Translator from "../../shared/components/Translator";
import DisabledBtn from "../../shared/components/buttons/DisabledBtn";

function BlogCard(props) {
  return (
    <Card title={<Translator text={props.name} />} className="blog-card">
      <p>{<Translator text={props.description} />}</p>
      <span className="blog-card-content">
        <p>
          <Translator text="Total posts:" /> {props.postsNum}
        </p>
        <p>
          {props.postsNum > 0 ? (
            <PrimaryBtn linkTo="/posts" btnText="SHOW" />
          ) : (
            <DisabledBtn btnText="Nothing to look at" />
          )}
        </p>
      </span>
    </Card>
  );
}

export default BlogCard;
