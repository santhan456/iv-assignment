import React from 'react';
import './App.css';
import { InvoicePage } from './components/InvoicePage';
import 'antd/dist/antd.css'; 

function App() {
  return (
    <div className="App">
      <InvoicePage/>
      <div id="modal-container"></div>
    </div>
  );
}

export default App;
