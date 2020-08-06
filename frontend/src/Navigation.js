import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import UserContext from "./userContext";
import "./navigation.css"
import logo from "./images/logo192.png"

function Navigation() {

  const { user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    localStorage.removeItem("_token")
    localStorage.removeItem("user")
    setUser(null);
  }

  const showNavLinks = () => (
    (user)
      ? <div className="navigation-container">
        <NavLink className="nav-link" exact to="/companies">Companies</NavLink>
        <NavLink className="nav-link" exact to="/jobs">Jobs</NavLink>
        <NavLink className="nav-link" exact to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/" onClick={handleLogOut}>Log Out</NavLink>
      </div>
      : <NavLink className="nav-link" exact to="/login">Log In</NavLink>
  )

  return (
    <nav className="navbar navbar-light bg-light bg-white navigation-container">
      <NavLink className=" navbar-brand" exact to="/">
        <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="" loading="lazy" />
        Jobly
        </NavLink>
      {showNavLinks()}
    </nav>
  );
}

export default Navigation;
