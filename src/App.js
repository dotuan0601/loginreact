import React from 'react';
import {useRoutes} from 'hookrouter';
import logo from './logo.svg';
import './App.css';
import {mainRoute} from "./router";

function App() {
  return (
    <div className="App">
        {useRoutes(mainRoute)}
    </div>
  );
}

export default App;
