import React from 'react';
import { addCommas } from "./helperFunctions/helpers";
function JobCard({ job, handleApply }) {
  const { id, title, salary, equity, state } = job;

  return (
    <section className="card" style={{display:"flex", justifyContent:"space-between" }}>
      <div>
        <h5>{title}</h5>
        <p>Salary: ${addCommas(salary)}</p>
        <p>Equity: {equity*100}%</p>
      </div>
      <div style={{alignSelf:"flex-end"}}>
        {!state
          ? <button className="btn btn-danger" onClick={() => handleApply(id)}>Apply</button>
          : <button className="btn  btn-secondary" disabled>Applied</button>}
      </div>
    </section>
  );
}

export default JobCard;
