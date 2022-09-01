import React from "react";
import { Avatar } from "antd";

import { useDrawer } from "../hooks/useDrawer";
import UserInfoDrawer from "./UserInfoDrawer";

export default function UserAvatar() {
  const { toggleDrawer, visible } = useDrawer();
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <Avatar
        src={userData.imageUrl}
        style={{
          verticalAlign: "middle",
        }}
        size="large"
        onClick={toggleDrawer}
      >
        T
      </Avatar>
      <UserInfoDrawer visible={visible} onClose={toggleDrawer} />
    </>
  );
}
