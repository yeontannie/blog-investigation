import React, {useState, useEffect} from 'react'
import translate from "translate"

import { useUserSettingsContext } from '../store/UserSettingsProvider'

translate.engine = 'google'

export default function Translator({text}) {
  const {language} = useUserSettingsContext()
  const [translatedText, setTranslatedText] = useState()

  useEffect(() => {
    const translateText = async() => {
      const result = await translate(text, language)
      setTranslatedText(result)
    }
    translateText()
  }, [text, language])

  return <>{translatedText}</>
}