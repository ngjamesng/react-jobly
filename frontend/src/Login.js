import React, { useState } from 'react';
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";


function Login({setIsLoggedIn}) {

  const [formData, setFormData] = useState({});
  const [formType, setFormType] = useState('login')
  const history = useHistory();


  const handleSubmit = evt => {
    evt.preventDefault();
    const getToken = async (formType) => {
      const token = await JoblyApi[formType](formData);
      localStorage.setItem('_token', token)
    }
    getToken(formType);
    setIsLoggedIn(true)
    history.push("/")
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  const signUp = () => {
    return ['username', 'password', 'first_name', 'last_name', 'email'].map(key => (
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <input
          id={key}
          type = {key === 'password' || key === 'email' ?  key : 'text'}
          name={key}
          value={formData[key]}
          onChange={handleChange}
        />
      </div>
    ))
  }

  const login = () => {
    return ['username', 'password'].map(key => (
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <input
          id={key} 
          type = {key === 'password' ?  'password' : 'text'}
          name={key}
          value={formData[key]}
          onChange={handleChange}
        />
      </div>
    ))
  }

  return (
    <div>
      <h1>Login/Signup</h1>
      <button onClick={() => setFormType('login')}>Login</button>
      <button onClick={() => setFormType('signUp')}>SignUp</button>
      <form onSubmit={handleSubmit}>
        {formType === ('login') ? login() : signUp()}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;

Login.defaultProps = {
  userInfo: {
    first_name: "first_name",
    last_name: "last_name",
    email: "email",
    photoUrl: "photoUrl",
  }
}
