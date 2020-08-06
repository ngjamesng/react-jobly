import React, { useContext } from 'react';
import UserContext from "./userContext";
import { useHistory } from "react-router-dom";
import logo from "./images/logo192.png"
import "./Home.css"

function Home() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/login")
  }

  return (
    <div className='jumbotron home'>
      <div className="container">
        <h1 className='display-3'>
        <img src={logo} width="70" height="70" alt="" className="mr-3" loading="lazy" />
          Jobly
          </h1>
        <p className='lead'>All the jobs in one, convenient place</p>
        {user
          ? <p className='lead text-capitalize'>Welcome back, {user.first_name} {user.last_name}!</p>
          : <button className="btn btn-primary btn-lg" onClick={handleClick}>Log In</button>
        }
      </div>
    </div>
  );
}

export default Home;
