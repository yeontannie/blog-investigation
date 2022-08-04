import React from 'react'
import {useTranslation} from '../../shared/hooks/useTranslation'

function Post() {
  const {translateText} = useTranslation() 
  const language = localStorage.getItem('language')
  return (
    <div>{translateText("a Post", language)}</div>
  )
}

export default Post