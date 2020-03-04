import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { useParams, Redirect } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import NotFound from "./NotFound";

function Company() {
  const { handle } = useParams();
  const [company, setCompany] = useState({ jobs: [] });


  useEffect(() => {
    async function getCompany() {
      const c = await JoblyApi.getCompany(handle);
      setCompany(c);
    }
    getCompany();

  }, [handle]);

  if (!localStorage._token) return <Redirect to="/login" />

  const showJobs = () => (
    company.jobs.map(job => (
      <JobCard key={job.id} job={job} />
    ))
  );


  return (
    (!company.handle)
      ? <NotFound />
      : (
        <div>
          <h5>{company.name}</h5>
          <p>{company.description}</p>
          {showJobs()}
        </div>
      )
  );
}

export default Company;
