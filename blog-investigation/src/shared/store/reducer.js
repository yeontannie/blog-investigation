export const userSettingsInitialState = {
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'uk',
    accessToken: ''
}

const userSettingsReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: payload.theme
            }

        case "TOGGLE_LANGUAGE":
            return {
                ...state,
                language: payload.language
            }
            
        case "SET_ACCESS_TOKEN":
            return{
                ...state,
                accessToken: payload.accessToken
            }

        default:
            return userSettingsInitialState;
    }
}

export default userSettingsReducer