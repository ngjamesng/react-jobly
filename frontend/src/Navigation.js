import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import UserContext from "./userContext";


function Navigation({ setIsLoggedIn }) {

  const { user } = useContext(UserContext);
  
  const handleLogOut = () => {
    localStorage.removeItem("_token")
    localStorage.removeItem("user")
    setIsLoggedIn(false)
  }

  const showNavLinks = () => (
    (user) 
      ? <div>
          <NavLink exact to="/companies">Companies</NavLink>
          <NavLink exact to="/jobs">Jobs</NavLink>
          <NavLink exact to="/profile">Profile</NavLink>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      : <NavLink exact to="/login">Log In</NavLink>
  )

  return (
    <nav className="navbar">
      <NavLink exact to="/">Jobly</NavLink>
      {showNavLinks()}
    </nav>
  );
}

export default Navigation;
