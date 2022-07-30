import 'antd/dist/antd.min.css' 
import React from 'react';
import { Button, Result } from 'antd';
import { BrowserRouter } from 'react-router-dom'
import Router from './shared/Router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />

        <Result
          status="success"
          title="Successfully installed ANT Desing!"
          subTitle="2017182818828182881 packages have been installed, good luck."
          extra={[
            <Button type="primary" key="console">
              Thanks
            </Button>,
            <Button key="buy">Shoosh...</Button>,
          ]}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
