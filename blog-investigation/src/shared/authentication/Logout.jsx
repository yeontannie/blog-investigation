import React from 'react'
import {Button} from 'antd'
import {GoogleOutlined} from '@ant-design/icons'
import {GoogleLogout} from 'react-google-login'
import { CLIENT_ID } from '../../secret.env'
import { useAuthService } from '../hooks/useAuthService'

function Logout(){
    const {onSuccessLogout} = useAuthService()
    return(
        <span>
            <GoogleLogout 
                render={renderProps => (
                    <Button className='logout-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <GoogleOutlined/> Logout
                    </Button>
                )}
                clientId={CLIENT_ID}
                onLogoutSuccess={onSuccessLogout}
            />  
        </span>
    )
}

export default Logout