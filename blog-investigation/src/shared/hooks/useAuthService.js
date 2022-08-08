import { gapi } from 'gapi-script'
import { useUserSettingsContext } from '../store/UserSettingsProvider'
import { CLIENT_ID } from '../../secret.env'

export const useAuthService = () => {
    const {setAccessToken} = useUserSettingsContext()

    function start(){
        gapi.auth2.init({
            clientId: CLIENT_ID,
            scope: ""
        })
    }
    gapi.load("client:auth2", start)


    const onSuccessLogin = () => {
        const token = gapi.auth.getToken().access_token
        setAccessToken(token)
    }

    const onFailureLogin = (res) => {
        console.log('login failed', res)
    }

    const onSuccessLogout = () => {
        setAccessToken('')
    }

    return {onSuccessLogin, onFailureLogin, onSuccessLogout}
}