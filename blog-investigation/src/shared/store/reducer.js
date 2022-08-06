export const userSettingsInitialState = {
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'uk',
    accessToken: localStorage.getItem('token') || ''
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
            
        case "ADD_ACCESS_TOKEN":
            return{
                ...state,
                accessToken: payload.accessToken
            }

        default:
            throw new Error(`no case for type ${type} found in userSettingsReducer`)
    }
}

export default userSettingsReducer