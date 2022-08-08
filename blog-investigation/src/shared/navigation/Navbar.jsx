import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import logo from '../../assets/logo.png'
import { useUserSettingsContext } from '../store/UserSettingsProvider'
import ThemeToggler from '../components/ThemeToggler'

import Login from '../authentication/Login'
import Logout from '../authentication/Logout'

const { Header } = Layout

function Navbar() {
  const {theme, toggleTheme, accessToken} = useUserSettingsContext()

  return (
    <Header className={theme} style={{width: '100%'}}>
      <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" className='logo'>
          <Link to="/">
            <img src={logo} alt='logo' style={{height: '50px'}}/>
          </Link>
        </Menu.Item> 
        <Menu.Item className='toggler' key="2">
          <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        </Menu.Item>
        <Menu.Item key="4" className='menu-login'>{ accessToken === '' ? <Login/> : <Logout/> }</Menu.Item>
      </Menu>
    </Header>
  )
}

export default Navbar