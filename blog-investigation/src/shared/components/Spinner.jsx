import React from "react";
import { Spin } from "antd";

export default function Spinner() {
  return (
    <Spin size="large" style={{ display: "flex", justifyContent: "center" }} />
  );
}
