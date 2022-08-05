import 'antd/dist/antd.min.css' 
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './shared/navigation/Navbar'
import Main from './shared/components/layout/Main';

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
