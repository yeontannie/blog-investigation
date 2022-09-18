import React from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import { HomeOutlined, BookOutlined } from "@ant-design/icons";

import { useUserSettingsContext } from "../../store/UserSettingsProvider";

import Login from "../authentication/Login";
import UserAvatar from "../user-info/UserAvatar";

import ThemeToggleIcon from "./../togglers/ThemeToggleIcon";
import LanguageToggleIcon from "../togglers/LanguageToggleIcon";

const { Header } = Layout;

function NavbarForMobile() {
  const { theme, isLoggedIn } = useUserSettingsContext();

  return (
    <Header className={`mobile-${theme}`} style={{ width: "100%" }}>
      <Menu
        theme={`mobile-${theme}`}
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1" className="nav-mobile">
          <Link to="/">
            {theme === "dark" ? (
              <span>
                <HomeOutlined style={{ color: "white", fontSize: "18px" }} />
              </span>
            ) : (
              <span>
                <HomeOutlined style={{ color: "#141414" }} />
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item key="2" className="nav-mobile">
          <Link to="/blogs">
            {theme === "dark" ? (
              <span>
                {" "}
                <BookOutlined style={{ color: "white", fontSize: "18px" }} />
              </span>
            ) : (
              <span>
                {" "}
                <BookOutlined style={{ color: "#141414" }} />
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item key="3" className="mobile-toggler">
          <ThemeToggleIcon />
        </Menu.Item>
        <Menu.Item key="4" className="mobile-toggler">
          <LanguageToggleIcon />
        </Menu.Item>
        <Menu.Item key="5" className="menu-login-mobile">
          {isLoggedIn ? <UserAvatar /> : <Login />}
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default React.memo(NavbarForMobile);
