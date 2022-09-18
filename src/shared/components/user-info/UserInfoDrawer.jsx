import React from "react";
import { Avatar, Drawer } from "antd";

import Logout from "../authentication/Logout";
import { useUserSettingsContext } from "../../store/UserSettingsProvider";

export default function UserInfoDrawer({ visible, onClose }) {
  const { theme } = useUserSettingsContext();
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <Drawer
      drawerStyle={{
        backgroundColor: theme === "dark" ? "#141414" : "white",
        color: theme === "dark" ? "white" : "#141414",
      }}
      closable={false}
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <Avatar size={64} src={userData.imageUrl} />
      <p className="user-name">{userData.name}</p>
      <p className="user-email">{userData.email}</p>
      <Logout />
    </Drawer>
  );
}
