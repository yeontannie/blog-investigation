import { useState } from "react";
import useSystemTheme from 'use-system-theme'

export const useDarkMode = () => {
    const systemTheme = useSystemTheme()
    const [theme, setTheme] = useState(checkTheme())

    function toggleTheme(){
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    }

    function checkTheme(){
        const currentTheme = localStorage.getItem('theme')
        return currentTheme ? currentTheme : systemTheme
    }

    return [theme, toggleTheme]
}