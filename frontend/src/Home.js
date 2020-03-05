import React, { useContext } from 'react';
import UserContext from "./userContext";
import "./Home.css"

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className='jumbotron home'>
      <div className="container">
        <h1 className='display-4'>Jobly</h1>
        <p className='lead'>All the jobs in one, convenient place</p>
        {user
          ? <p className='lead'>Welcome Back!</p>
          : <a className="btn btn-primary btn-lg" href="#" role="button">Log In</a>
        }
      </div>
    </div>
  );
}

export default Home;
