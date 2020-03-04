import React from 'react';

function JobCard({ job }) {
  const {title, company_handle, salary, equity, state} = job;
  // TODO: HANDLE APPLY STATE/API CALL
  
  return (
    <div>
      <h5>{title}</h5>
      <p>salary: {salary}</p>
      <p>equity: {equity}</p>
      {!state 
      ? <button>Apply</button> 
      : <button disabled>Applied</button>}
    </div>
  );
}

export default JobCard;
