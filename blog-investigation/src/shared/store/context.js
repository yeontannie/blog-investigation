import {createContext} from 'react'
import {userSettingsInitialState} from './reducer'

export const UserSettingsContext = createContext(userSettingsInitialState)
