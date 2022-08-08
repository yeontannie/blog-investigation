
export const toggleTheme = (newTheme) => {
    return {
        type:"TOGGLE_THEME",
        payload:{
            theme:newTheme
        }
    }
}

export const toggleLanguage = (newLanguage) => {
    return {
        type:'TOGGLE_LANGUAGE',
        payload:{
            language:newLanguage
        }
    }
}

export const setAccessToken = (token) => {    
    return{
        type:'SET_ACCESS_TOKEN',
        payload:{
            accessToken:token
        }
    }
}
