import React, { useState, useContext } from 'react';
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";
import UserContext from "./userContext";
import "./Login.css";
const INITIALFORMDATA = {
  'username':"", 'password':"", 'first_name':"", 'last_name':"", 'email':""
}
function Login() {

  const [formData, setFormData] = useState(INITIALFORMDATA);
  const [formType, setFormType] = useState('login')
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const getUserAndToken = async (formType) => {
      const token = await JoblyApi[formType](formData);
      localStorage.setItem('_token', token);
      const response = await JoblyApi.getUser(formData.username);
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
    }
    await getUserAndToken(formType);
    history.push("/");
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
      <div key={key} className="form-group">
        <label htmlFor={key}>{key.split("_").join(" ")}</label>
        <input
          id={key}
          name={key}
          type={key === 'password' || key === 'email' ? key : 'text'}
          value={formData[key]}
          onChange={handleChange}
          className="form-control"
          />
      </div>
    ))
  }

  const login = () => {
    return ['username', 'password'].map(key => (
      <div key={key} className="form-group">
        <label htmlFor={key}>{key.split("_").join(" ")}</label>
        <input
          id={key}
          type={key === 'password' ? 'password' : 'text'}
          name={key}
          value={formData[key]}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    ))
  }

  return (
    <section className="container">
      <div className="Login-Form">
      <h1>Login/Signup</h1>
      <div className="btn-group btn-group-toggle" dataToggle="buttons">
        <button onClick={() => setFormType('login')} className="btn btn-primary">Login</button>
        <button onClick={() => setFormType('signUp')} className="btn btn-primary">Sign Up</button>
      </div>

      <form onSubmit={handleSubmit} className="LoginRegister-Form">
        {formType === ('login') ? login() : signUp()}
        <button className="btn btn-primary">Submit</button>
      </form>
      </div>
    </section>
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
