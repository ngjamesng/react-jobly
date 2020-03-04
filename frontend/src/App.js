import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navigation from './Navigation'
import Routes from './Routes'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage._token){
      setIsLoggedIn(true)
    }
  },[isLoggedIn])

  return (
    <div>
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes setIsLoggedIn={setIsLoggedIn}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
