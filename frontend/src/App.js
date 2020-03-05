import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Routes from './Routes';
import UserContext from './userContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userFromLS = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState(userFromLS);

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