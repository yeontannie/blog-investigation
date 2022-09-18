import React from "react";
import { Avatar } from "antd";

import { useDrawer } from "../../hooks/useDrawer";
import UserInfoDrawer from "./UserInfoDrawer";
import { useWindowResize } from "./../../hooks/useWindowResize";

export default function UserAvatar() {
  const { width, breakPoint } = useWindowResize();
  const { toggleDrawer, visible } = useDrawer();
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <Avatar
        src={userData.imageUrl}
        style={{
          verticalAlign: "middle",
        }}
        size={width > breakPoint ? "large" : "small"}
        onClick={toggleDrawer}
      />
      <UserInfoDrawer visible={visible} onClose={toggleDrawer} />
    </>
  );
}
