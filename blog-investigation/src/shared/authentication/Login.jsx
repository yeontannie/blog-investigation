import React, { useEffect } from 'react'
import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { GoogleLogin } from 'react-google-login'
import { CLIENT_ID } from '../../secret.env'
import { useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script'
import { useUserSettingsContext } from '../store/UserSettingsProvider'

const clientId = CLIENT_ID

function Login() {
  let navigate = useNavigate();
  const {addAccessToken} = useUserSettingsContext()

  useEffect(() => {
    function start(){
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load("client:auth2", start)
  })

  const onSuccess = (res) => {
    const token = gapi.auth.getToken().access_token
    addAccessToken(token)
    navigate("/", { replace: true });    
  }

  const onFailure = (res) => {
    console.log('login failed', res)
  }

  return (
    <div>
      <GoogleLogin
        render={renderProps => (
          <Button  className='login-btn' onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <GoogleOutlined/> Login
          </Button>
        )}
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Login