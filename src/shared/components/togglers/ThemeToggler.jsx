import React from 'react'
import { Switch } from 'antd'

import { useUserSettingsContext } from '../../store/UserSettingsProvider'
import Translator from '../Translator'

function ThemeToggler() {
  const {theme, toggleTheme} = useUserSettingsContext()
  
  return (
    <Switch 
      checked={theme === 'dark'}
      onChange={toggleTheme}
      checkedChildren={<Translator text='Dark' />} 
      unCheckedChildren={<Translator text='Light' />}
    />
  )
}

export default ThemeToggler