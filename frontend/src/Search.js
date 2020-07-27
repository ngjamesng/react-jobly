import React, { useState } from 'react';
import "./Search.css"

function Search({ search }) {

  const INITIAL_STATE = { term: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    search({ search: formData.term });

  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldFormData => ({
      ...oldFormData,
      [name]: value
    }))
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <label htmlFor="term"></label>
      <input
        id="term"
        name="term"
        value={formData.term}
        onChange={handleChange}
        placeholder="Enter search term..."
        className="form-control form-control-lg flex-grow-1"
      />
      <button className="btn btn-primary btn-lg">Search</button>
    </form >
  );
}

export default Search;
