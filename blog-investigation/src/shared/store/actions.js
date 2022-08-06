
export const toggleTheme = (theme) => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)

    return {
        type:"TOGGLE_THEME",
        payload:{
            theme:newTheme
        }
    }
}

export const toggleLanguage = (language) => {
    const newLanguage = language === 'uk' ? 'en' : 'uk'
    localStorage.setItem('language', newLanguage)

    return {
        type:'TOGGLE_LANGUAGE',
        payload:{
            language:newLanguage
        }
    }
}
