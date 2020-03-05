import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'
import UserContext from "./userContext";
import JoblyApi from "./JoblyApi"

function Profile() {
  const { user } = useContext(UserContext);
  const formUser = {...user}
  delete formUser.username
  delete formUser.jobs
  const [formData, setFormData] = useState(formUser);

  if (!user) return <Redirect to="/login" />

  const handleSubmit = evt => {
    evt.preventDefault();
    const patchUser = async () => {
      formData.photo_url = formData.photo_url || "http://somedefault.photo"
      const updatedUser = await JoblyApi.patchUser(user.username, formData)
      setFormData(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
    patchUser()
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  const inputs = () => {
    return Object.keys(formUser)
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
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;

