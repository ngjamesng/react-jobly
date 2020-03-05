import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom'
import UserContext from "./userContext";


function Navigation() {

  const { user, setUser } = useContext(UserContext);
  
  const handleLogOut = () => {
    localStorage.removeItem("_token")
    localStorage.removeItem("user")
    setUser(null);
  }

  const showNavLinks = () => (
    (user) 
      ? <div style={{display:"flex"}}>
          <NavLink className="nav-link" exact to="/companies">Companies</NavLink>
          <NavLink className="nav-link" exact to="/jobs">Jobs</NavLink>
          <NavLink className="nav-link" exact to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/login" onClick={handleLogOut}>Log Out</NavLink>
        </div>
      : <NavLink className="nav-link" exact to="/login">Log In</NavLink>
  )

  return (
    <nav className="navbar navbar-light bg-light">
      <NavLink className="nav-link" exact to="/">Jobly</NavLink>
      {showNavLinks()}
    </nav>
  );
}

export default Navigation;
