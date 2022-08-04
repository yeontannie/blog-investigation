import React from 'react'
import {useTranslation} from '../hooks/useTranslation'

function Home() {
  const {translateText} = useTranslation() 
  const language = localStorage.getItem('language')
  return (
    <div>{translateText('Home', language)}</div>
  )
}

export default Home