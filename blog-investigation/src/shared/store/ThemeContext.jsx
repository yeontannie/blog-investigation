import React from 'react'
import  {useDarkMode} from '../hooks/useDarkMode'

const {Provider, Consumer} = React.createContext()

function ThemeContextProvider(props){
    const [theme, toggleTheme] = useDarkMode()
    
    return(
        <Provider value={{theme: theme, toggleTheme:toggleTheme}}>
            {props.children}
        </Provider>
    )
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}