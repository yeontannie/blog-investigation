import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import logo from "../../../assets/logo.png";
import { useUserSettingsContext } from "../../store/UserSettingsProvider";
import { useWindowResize } from "../../hooks/useWindowResize";

import Login from "../authentication/Login";
import ThemeToggler from "../togglers/ThemeToggler";
import LanguageToggler from "../togglers/LanguageToggler";

import Translator from "../Translator";
import UserAvatar from "../user-info/UserAvatar";
import NavbarForMobile from "./NavbarForMobile";

const { Header } = Layout;

function Navbar() {
  const { theme, isLoggedIn } = useUserSettingsContext();
  const { width, breakPoint } = useWindowResize();

  return (
    <>
      {width > breakPoint ? (
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
      ) : (
        <NavbarForMobile />
      )}
    </>
  );
}

export default React.memo(Navbar);
