import React from 'react'
import Translator from './Translator'

function Home() {
  return (
    <div>
      <Translator text="Home" />
      <br/>
      <Translator text="A list of blogs will be displayed here" />
    </div>
  )
}

export default Home