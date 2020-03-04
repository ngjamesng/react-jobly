import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import NotFound from './NotFound'

function Routes({setIsLoggedIn}) {
  
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home/></Route> 
        <Route exact path="/companies"><Companies /></Route>
        <Route exact path="/companies/:handle"><Company /></Route>
        <Route exact path="/jobs"><Jobs /></Route>
        <Route exact path="/login"><Login setIsLoggedIn={setIsLoggedIn}/></Route>
        <Route exact path="/profile"><Profile/></Route>
        <Route><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default Routes;
