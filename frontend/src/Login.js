import React, { useState } from 'react';

function Login() {

  const [formData, setFormData] = useState({});
  const [formType, setFormType] = useState('login')


  const handleSubmit = evt => {
    evt.preventDefault();
    //if formtype === login, login
    //if formtype === signup, signup
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  const signUp = () => {
    return ['username', 'password', 'firstName', 'lastName', 'email'].map(key => (
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <input
          id={key}
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
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    photoUrl: "photoUrl",
  }
}
