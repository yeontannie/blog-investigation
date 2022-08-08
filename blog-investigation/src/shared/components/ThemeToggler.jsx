import React from 'react'
import {Switch} from 'antd'

function ThemeToggler({theme, toggleTheme}) {
  return (
    <Switch 
      checked={theme === 'dark'}
      onChange={toggleTheme}
      checkedChildren='Dark' 
      unCheckedChildren='Light'
    />
  )
}

export default ThemeToggler