import React, { useContext } from 'react';
import UserContext from "./userContext";
import { useHistory } from "react-router-dom";

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
        <h1 className='display-4'>Jobly</h1>
        <p className='lead'>All the jobs in one, convenient place</p>
        {user
          ? <p className='lead'>Welcome Back!</p>
          : <button className="btn btn-primary btn-lg" onClick={handleClick}>Log In</button>
        }
      </div>
    </div>
  );
}

export default Home;
