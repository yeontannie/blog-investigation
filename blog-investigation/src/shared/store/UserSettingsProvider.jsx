import React, { useReducer, useContext, useMemo } from 'react'
import { UserSettingsContext } from './context'
import userSettingsReducer, { userSettingsInitialState } from './reducer'
import { toggleTheme, toggleLanguage, setAccessToken } from './actions'

const UserSettingsProvider = ({children}) => {
    const [state, dispatch] = useReducer(userSettingsReducer, userSettingsInitialState) 
    
    const setTheme = (theme) => {
        const newTheme = theme ? 'dark' : 'light'
        localStorage.setItem('theme', newTheme)
        dispatch(toggleTheme(newTheme))
    }

    const setLanguage = (language) => {
        const newLanguage = language === 'uk' ? 'en' : 'uk'
        localStorage.setItem('language', newLanguage)
        dispatch(toggleLanguage(newLanguage))
    }

    const userSettingsContextValue = useMemo(() => {
        return {
            ...state,
            toggleTheme: (theme) => setTheme(theme),
            toggleLanguage: (language) => setLanguage(language),
            setAccessToken: (token) => dispatch(setAccessToken(token))
        }
    }, [state, dispatch])

    return <UserSettingsContext.Provider value={userSettingsContextValue}>{children}</UserSettingsContext.Provider>
}

export const useUserSettingsContext = () => {
    return useContext(UserSettingsContext)
}

export default UserSettingsProvider