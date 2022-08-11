import 'antd/dist/antd.min.css' 
import React from 'react';
import UserSettingsProvider from './shared/store/UserSettingsProvider'
import { BrowserRouter } from 'react-router-dom'
import SharedLayout from './shared/components/layout/SharedLayout'
import Navbar from './shared/navigation/Navbar'
import Router from './shared/navigation/Router'

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <UserSettingsProvider>
          <Navbar />
          <SharedLayout>
            <Router />
          </SharedLayout>
        </UserSettingsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
