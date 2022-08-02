import React from 'react'
import { Layout } from 'antd';
import Router from '../../navigation/Router';
import { ThemeContextConsumer } from '../../store/ThemeContext';

const { Content } = Layout

function Main() {
  return (
    <ThemeContextConsumer>
      {({theme}) => (
        <Content className={theme} >
          <Router />
        </Content>
      )}
    </ThemeContextConsumer>
  )
}

export default Main