import React, { useState } from 'react';

function Profile({ userInfo }) {

  const [formData, setFormData] = useState(userInfo);


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
    return Object.keys(userInfo).map(key => (
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

Profile.defaultProps = {
  userInfo: {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    photoUrl: "photoUrl",
  }
}
