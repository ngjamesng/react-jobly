import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'
import UserContext from "./userContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  
  if (!localStorage._token) return <Redirect to="/login" />

  const handleSubmit = evt => {
    evt.preventDefault();
    // do search function
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  const inputs = () => {
    return Object.keys(user)
    // .filter(key=> key !== "jobs")
    .map(key => (
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
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        {inputs()}
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;

