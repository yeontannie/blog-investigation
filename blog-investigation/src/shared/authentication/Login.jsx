import React, { useEffect } from 'react'
import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { GoogleLogin } from 'react-google-login'
import { CLIENT_ID } from '../../secret.env'
import { useGapiAuth } from '../hooks/useGapiAuth'
import authService from '../services/authService'

function Login() {
  const {onSuccessLogin, onFailureLogin} = useGapiAuth()
  useEffect(() => {
    authService.initClient()
  }, [])

  return (
    <span>
      <GoogleLogin 
        render={renderProps => (  
          <Button className='login-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <GoogleOutlined/> <span>Login</span>
          </Button>
        )}
        clientId={CLIENT_ID}
        onSuccess={onSuccessLogin}
        onFailure={onFailureLogin}
        cookiePolicy={'single_host_origin'}
      />
    </span>
  )
}

export default Login