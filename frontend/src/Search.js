import React, { useState } from 'react';

function Search({ search }) {

  const INITIAL_STATE = { term: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    search({search: formData.term});
    setFormData(INITIAL_STATE);
    
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
      <label htmlFor="term"></label>
      <input
        id="term"
        name="term"
        value={formData.term}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
