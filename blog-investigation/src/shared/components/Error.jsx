import React from 'react'
import {useTranslation} from '../hooks/useTranslation'

function Error() {
  const {translateText} = useTranslation() 
  const language = localStorage.getItem('language')
  return (
    <div>
        <h3>{translateText('Error', language)}</h3>
        <h3>404</h3>
    </div>
  )
}

export default Error