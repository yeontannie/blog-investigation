export function useToggleLanguage(){    
    function toggleLanguage(){
        const currentLanguage = localStorage.getItem('language')
        localStorage.setItem("language", currentLanguage === 'uk' ? 'en' : 'uk')
    }

    return [toggleLanguage]
}
