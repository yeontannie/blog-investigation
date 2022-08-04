import {useState} from 'react'
import translate from "translate"

translate.engine = 'google'

export function useTranslation() {
    const [language, setLanguage] = useState(checkLanguage())
    const [translatedText, setTranslatedText] = useState('')

    function checkLanguage(){
        const currentLanguage = localStorage.getItem('language')
        return currentLanguage ? currentLanguage : "uk"
    }

    function toggleLanguage(){
        setLanguage(prevLang => (prevLang === 'uk' ? 'en' : 'uk'))
        localStorage.setItem("language", language === 'uk' ? 'en' : 'uk')
    }

    function translateText(text, lang){ 
        translate(text, 
        { from: lang === 'uk' ? 'en' : 'uk',
          to: lang })
        .then(res => {
            setTranslatedText(res)
        })
        .catch(error => console.log(error));
        return translatedText
    }

    return {language, toggleLanguage, translateText}
}