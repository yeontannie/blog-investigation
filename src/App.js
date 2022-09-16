import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import UserSettingsProvider from './shared/store/UserSettingsProvider'
import SharedLayout from './shared/components/layout/SharedLayout'
import Navbar from './shared/navigation/Navbar'
import Router from './shared/navigation/Router'

import 'antd/dist/antd.min.css' 

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
