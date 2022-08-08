import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

function Home() {
  return (
    <div>
      {useTranslation('Home')}   
      <br/> 
      {useTranslation('A list of blogs will be displayed here')}
    </div>
  )
}

export default Home