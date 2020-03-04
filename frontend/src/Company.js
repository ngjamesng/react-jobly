import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";

function Company() {
  const { handle } = useParams();
  const [company, setCompany] = useState({});
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function getCompany() {
      const c = await JoblyApi.getCompany(handle);
      setCompany(c);
    }
    getCompany();
  }, [handle]);
  
  //NEED TO FILTER BY A SINGLE COMPANY
  useEffect(() => {
    async function getJobs() {
      const j = await JoblyApi.getJobs();
      setJobs(j);
    }
    getJobs();
  }, []);

  const showJobs = () => (
    jobs.map(job => (
      <JobCard key={job.id} job={job} />
    ))
  )

  return (

    <div>
      <h5>{company.name}</h5>
      <p>{company.description}</p>
      {showJobs()}
    </div>
  );
}

export default Company;
