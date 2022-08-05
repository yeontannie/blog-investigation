import translate from "translate"

translate.engine = 'google'

export function useTranslation() {
    function translateText(text, lang){ 
        translate(text, 
            { from: lang === 'uk' ? 'en' : 'uk',
              to: lang })
            .then(res => {
                console.log(res)
                return res
            })
            .catch(error => console.log(error));
    }

    return [translateText]
}