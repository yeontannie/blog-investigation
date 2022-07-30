import 'antd/dist/antd.min.css' 
import { Button, Result } from 'antd';
import React from 'react';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
