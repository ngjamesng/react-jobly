import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import Search from './Search.js'
import JobCard from './JobCard'
import JoblyApi from "./JoblyApi";

function Jobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const j = await JoblyApi.getJobs();
      setJobs(j);
    }
    getJobs();
  }, []);

  if (!localStorage._token) return <Redirect to="/login" />

  const showJobs = () => (
    jobs.map(job => (
      <JobCard key={job.id} job={job} />
    ))
  )

  const search = async (term) => {
    setJobs(await JoblyApi.getJobs(term));
  }

  return (
    <div>
      <h1>List of Jobs</h1>
      <Search search={search} />
      {showJobs()}
    </div>
  );
}

export default Jobs;
