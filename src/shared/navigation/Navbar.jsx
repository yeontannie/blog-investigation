import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import logo from "../../assets/logo.png";
import { useUserSettingsContext } from "../store/UserSettingsProvider";

import ThemeToggler from "../components/togglers/ThemeToggler";
import LanguageToggler from "../components/togglers/LanguageToggler";
import Translator from "../components/Translator";

import Login from "../authentication/Login";
import UserAvatar from "../components/user-info/UserAvatar";

const { Header } = Layout;

function Navbar() {
  const { theme, isLoggedIn } = useUserSettingsContext();

  return (
    <Header className={theme} style={{ width: "100%" }}>
      <Menu theme={theme} mode="horizontal" defaultSelectedKeys={["1"]}>
        <img key="6" src={logo} alt="logo" className="logo" />
        <Menu.Item key="1">
          <Link to="/">
            <Translator text="Home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="2" className="nav-blog">
          <Link to="/blogs">
            <Translator text="Blogs" />
          </Link>
        </Menu.Item>
        <Menu.Item key="3" className="toggler">
          <ThemeToggler />
        </Menu.Item>
        <Menu.Item key="4" className="toggler">
          <LanguageToggler />
        </Menu.Item>
        <Menu.Item key="5" className="menu-login">
          {isLoggedIn ? <UserAvatar /> : <Login />}
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;