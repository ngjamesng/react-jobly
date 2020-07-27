import React from 'react';
import { addCommas } from "./helperFunctions/helpers";
import "./JobCard.css"
function JobCard({ job, handleApply }) {
  const { id, title, salary, equity, state } = job;

  return (
    <section className="card JobCard">
      <div className="JobCard-Info">
        <div className="JobCard-Description">
        <h5 className="JobCard-Title">{title}</h5>
          <p>Salary: ${addCommas(salary)}</p>
          <p>Equity: {Math.floor(equity * 100)}%</p>
        </div>
        <div className="JobCard-Button">
          {!state
            ? <button className="btn btn-danger" onClick={() => handleApply(id)}>Apply</button>
            : <button className="btn  btn-secondary" disabled>Applied</button>
          }
        </div>
      </div>
    </section>
  );
}

export default JobCard;
