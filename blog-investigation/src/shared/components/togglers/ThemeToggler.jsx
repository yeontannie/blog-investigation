import React from 'react'
import { Switch } from 'antd'

import { useUserSettingsContext } from '../../store/UserSettingsProvider'

function ThemeToggler() {
  const {theme, toggleTheme} = useUserSettingsContext()
  
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