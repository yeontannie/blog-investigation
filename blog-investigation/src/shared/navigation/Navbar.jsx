import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Switch } from 'antd'
import logo from '../../assets/logo.png'
import { ThemeContextConsumer } from '../store/ThemeContext'

const { Header } = Layout

function Navbar() {
  return (
    <ThemeContextConsumer>
      {({theme, toggleTheme}) => (
        <Header className={theme} style={{width: '100%'}}>
          <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" className='logo'><Link to="/">
              <img src={logo} alt='logo' style={{height: '50px'}}/>
            </Link></Menu.Item> 
            <Menu.Item className='toggler' key="2">
              <Switch 
                onChange={toggleTheme}
                checkedChildren={theme === 'light' ? 'Light' : 'Dark'}
                unCheckedChildren={theme === 'light' ? 'Light' : 'Dark'}
              />
            </Menu.Item>
            <Menu.Item key="3"><Link to="/login">Login</Link></Menu.Item>
          </Menu>
        </Header>
      )}
    </ThemeContextConsumer>
  )
}

export default Navbar