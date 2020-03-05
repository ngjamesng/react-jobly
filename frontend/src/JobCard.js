import React from 'react';

function JobCard({ job, handleApply }) {
  const {id, title, salary, equity, state} = job;
  
  return (
    <div>
      <h5>{title}</h5>
      <p>salary: {salary}</p>
      <p>equity: {equity}</p>
      {!state 
      ? <button onClick={()=>handleApply(id)}>Apply</button> 
      : <button disabled>Applied</button>}
    </div>
  );
}

export default JobCard;
