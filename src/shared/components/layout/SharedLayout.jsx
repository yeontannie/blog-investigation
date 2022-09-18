import React from "react";
import { Layout } from "antd";

import { useUserSettingsContext } from "../../store/UserSettingsProvider";

const { Content } = Layout;

function SharedLayout(props) {
  const { theme } = useUserSettingsContext();

  return <Content className={theme}>{props.children}</Content>;
}

export default SharedLayout;
