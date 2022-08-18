import React from "react";
import Translator from "./Translator";

function NoData() {
  return (
    <h3 className="home-text">
      <Translator text="No data to display" />
    </h3>
  );
}

export default NoData;
