import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navigation from './Navigation'
import Routes from './Routes'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
