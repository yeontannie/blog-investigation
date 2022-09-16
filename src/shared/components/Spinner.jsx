import React from "react";
import { Spin } from "antd";

export default function Spinner({ children, isLoading }) {
  return (
    <Spin
      size="large"
      spinning={isLoading}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </Spin>
  );
}
