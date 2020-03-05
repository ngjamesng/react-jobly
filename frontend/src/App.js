import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Routes from './Routes';
import UserContext from './userContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const userFromLS = JSON.parse(localStorage.getItem("user"))
  const [user, setUser] = useState(userFromLS);

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
          <Navigation />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;