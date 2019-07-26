import React from 'react';
import logo from './logo.svg';
import BaseUse from './BaseUse';
import { Button } from 'antd';
import './App.css';

function App() {
  async function asyncFn() {
    console.log('00000');
    const p = await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    console.log(p);
    console.log('1111');
    console.log('22222');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BaseUse />
      <Button onClick={asyncFn}>+++</Button>
    </div>
  );
}

export default App;
