import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Switch } from 'antd'
import logo from '../../assets/logo.png'
import { ThemeContextConsumer } from '../store/ThemeContext'
import SelectLang from '../components/SelectLang'
import {GoogleOutlined} from '@ant-design/icons'
import { useTranslation } from '../hooks/useTranslation'

const { Header } = Layout

function Navbar({language, toggleLanguage}) {
  const {translateText} = useTranslation()

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
            <Menu.Item className='language' key="3"><SelectLang language={language} toggleLanguage={toggleLanguage} /></Menu.Item>
            <Menu.Item key="4" className='menu-login'><Link to="/login"><GoogleOutlined /> {translateText('Login', language)}</Link></Menu.Item>
          </Menu>
        </Header>
      )}
    </ThemeContextConsumer>
  )
}

export default Navbar