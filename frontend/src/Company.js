import React, { useState, useEffect} from 'react';
import JobCard from './JobCard';
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";

function Company() {
  const { handle } = useParams();
  const [company, setCompany] = useState({});
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getCompany = async () => setCompany(await JoblyApi.getCompany(handle));
    getCompany();
  }, [handle]);

  useEffect(() => {
    const getJobs = async () => setJobs(await JoblyApi.getJobs());
    getJobs();
  }, []);

  const showJobs = () => (
    jobs.map(job => (
      <JobCard key={job.id} job={job}/>
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
