import 'antd/dist/antd.min.css' 
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './shared/navigation/Navbar'
import Main from './shared/components/layout/Main';
import { useTranslation } from './shared/hooks/useTranslation'

function App() {  
  const {language, toggleLanguage} = useTranslation()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
