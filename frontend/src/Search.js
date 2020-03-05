import React, { useState } from 'react';

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
      <div class="form-group mb-2">
      <label htmlFor="term"></label>
      <input
        id="term"
        name="term"
        value={formData.term}
        onChange={handleChange}
        placeholder="Enter search term..."
        className="form-control"
      />
      </div>
    <button className="btn btn-primary mb-2">Search</button>
    </form >
  );
}

export default Search;
