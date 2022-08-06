import {Button} from 'antd'
import {GoogleOutlined} from '@ant-design/icons'
import {GoogleLogout} from 'react-google-login'
import { CLIENT_ID } from '../../secret.env'
import { useNavigate } from 'react-router-dom'
import { useUserSettingsContext } from '../store/UserSettingsProvider'

const clientId = CLIENT_ID

function Logout(){
    let navigate = useNavigate();
    const {addAccessToken} = useUserSettingsContext()

    const onSuccess = () => {
        localStorage.removeItem('token')
        addAccessToken('')
        navigate("/");       
    }

    return(
        <div>
            <GoogleLogout 
                render={renderProps => (
                    <Button className='logout-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <GoogleOutlined/> Logout
                    </Button>
                )}
                clientId={clientId}
                onLogoutSuccess={onSuccess}
            />  
        </div>
    )
}

export default Logout