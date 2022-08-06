import React from 'react'
import {Switch} from 'antd'

function ThemeToggler({theme, toggleTheme}) {
  return (
        <Switch 
            onChange={toggleTheme}
            checkedChildren={theme === 'light' ? 'Light' : 'Dark'}
            unCheckedChildren={theme === 'light' ? 'Light' : 'Dark'}
        />
  )
}

export default ThemeToggler