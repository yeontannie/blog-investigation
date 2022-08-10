import { useUserSettingsContext } from "../store/UserSettingsProvider"

export const useGapiAuth = () => {
    const {setIsLoggedIn} = useUserSettingsContext()

    const onSuccessLogin = (res) => {
        setIsLoggedIn()
        localStorage.setItem('token', res.accessToken)
    }
    
    const onFailureLogin = () => {
        localStorage.setItem('token', '')
    }
    
    const onSuccessLogout = () => {
        setIsLoggedIn()
        localStorage.setItem('token', '')
    }

    return {onSuccessLogin, onFailureLogin, onSuccessLogout}
}