import React, { useState } from 'react';

function Search() {

  const INITIAL_STATE = { searchTerm: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleSubmit = evt => {
    evt.preventDefault();
    setFormData(INITIAL_STATE);
    // do search function
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm"></label>
      <input
        id="searchTerm"
        name="searchTerm"
        value={formData.searchTerm}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
