import React, { useReducer, useContext, useMemo } from 'react'
import { UserSettingsContext } from './context'
import userSettingsReducer, { userSettingsInitialState } from './reducer'

const UserSettingsProvider = ({children}) => {
    const [state, dispatch] = useReducer(userSettingsReducer, userSettingsInitialState) 

    const userSettingsContextValue = useMemo(() => {
        return {
            ...state,
            toggleTheme: (isChecked) => dispatch({type:'TOGGLE_THEME', payload:{isChecked}}),
            toggleLanguage: (language) => dispatch({type:'TOGGLE_LANGUAGE', payload:{language}}),
            setIsLoggedIn: (isLoggedIn) => dispatch({type:"SET_IS_LOGGED_IN", payload:{isLoggedIn}})
        }
    }, [state, dispatch])

    return <UserSettingsContext.Provider value={userSettingsContextValue}>{children}</UserSettingsContext.Provider>
}

export const useUserSettingsContext = () => {
    return useContext(UserSettingsContext)
}

export default UserSettingsProvider