import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Routes from './Routes';
import JoblyApi from "./JoblyApi";
import UserContext from './userContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  
  useEffect(() => {

  })

  useEffect(() => {
    if (localStorage._token) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn]);

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes setIsLoggedIn={setIsLoggedIn} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
