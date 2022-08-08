import React, {useEffect} from 'react'
import translate from "translate"
import { useUserSettingsContext } from '../store/UserSettingsProvider'

translate.engine = 'google'

export const useTranslation = (text) => {
  const {language} = useUserSettingsContext()
  const [translatedText, setTranslatedText] = React.useState()

  useEffect(() => {
      const translateText = async() => {
      const translation = await translate(text, 
          { from: language === 'uk' ? "en" : 'uk', to: language })
          setTranslatedText(translation)
      }
      translateText()
  }, [text, language])

  return [translatedText]
}
