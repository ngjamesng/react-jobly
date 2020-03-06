import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'
import UserContext from "./userContext";
import JoblyApi from "./JoblyApi";
import "./Profile.css";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const formUser = { ...user }
  delete formUser.username
  delete formUser.jobs
  const [formData, setFormData] = useState(formUser);
  const [alert, setAlert] = useState()


  if (!user) return <Redirect to="/login" />

  const handleSubmit = evt => {
    evt.preventDefault();
    const patchUser = async () => {
      formData.photo_url = formData.photo_url || "http://somedefault.photo"
      try{
        const updatedUser = await JoblyApi.patchUser(user.username, formData)
        setFormData(updatedUser)
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setAlert({color: "success", msg: "You have successfully updated your profile."})
        setTimeout(()=>setAlert(null), 2000)
      } catch {
        setAlert({color: "danger", msg: "Invalid credentials."})
        setTimeout(()=>setAlert(null), 2000)
      }
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
        <div key={key} className="form-group">
          <label htmlFor={key} style={{ textTransform: "capitalize" }}>
            {key.split("_").join(" ")}
          </label>
          <input
            id={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      ))
  }

  const showAlert = (color, msg) => (
    <div class={`alert alert-${color}`}>
      {msg}
    </div>
  )

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="Profile-Form">
        <h1>Profile for {user.username}</h1>
        {inputs()}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password to save changes."
          />
        </div>
        {alert
        ? showAlert(alert.color,alert.msg)
        : null
        }
        <button className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;

