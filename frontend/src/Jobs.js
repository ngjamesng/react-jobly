import React from 'react';
import Search from './Search.js'
import JobCard from './JobCard'

function Jobs() {
  return (
    <div>
      <h1>List of Jobs</h1>
      <Search/>
      <JobCard/>
    </div>
  );
}

export default Jobs;
