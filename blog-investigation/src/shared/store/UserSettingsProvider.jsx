import { useReducer, useContext, useMemo } from 'react'

import {UserSettingsContext} from './context'
import userSettingsReducer, {userSettingsInitialState} from './reducer'
import { toggleTheme, toggleLanguage, addAccessToken } from './actions'

const UserSettingsProvider = ({children}) => {
    const [state, dispatch] = useReducer(userSettingsReducer, userSettingsInitialState) 

    const userSettingsContextValue = useMemo(() => {
        return {
            ...state,
            toggleTheme: () => dispatch(toggleTheme(state.theme)),
            toggleLanguage: () => dispatch(toggleLanguage(state.language)),
            addAccessToken: (token) => dispatch(addAccessToken(token))
        }
    }, [state, dispatch])

    return <UserSettingsContext.Provider value={userSettingsContextValue}>{children}</UserSettingsContext.Provider>
}

export const useUserSettingsContext = () => {
    return useContext(UserSettingsContext)
}

export default UserSettingsProvider