export const userSettingsInitialState = {
    theme: localStorage.getItem('theme') || 'light',
    language: localStorage.getItem('language') || 'uk'
}

const userSettingsReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "TOGGLE_THEME":
            console.log('toggle theme', payload)

            return {
                ...state,
                theme: payload.theme
            }
        case "TOGGLE_LANGUAGE":
            console.log("toggle language", payload)

            return {
                ...state,
                language: payload.language
            }
        default:
            throw new Error(`no case for type ${type} found in userSettingsReducer`)
    }
}

export default userSettingsReducer