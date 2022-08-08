import React from 'react'
import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { GoogleLogin } from 'react-google-login'
import { CLIENT_ID } from '../../secret.env'
import { useAuthService } from '../hooks/useAuthService'

function Login() {
  const {onSuccessLogin, onFailureLogin} = useAuthService()
  return (
    <span>
      <GoogleLogin
        render={renderProps => (
          <Button  className='login-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <GoogleOutlined/> Login
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