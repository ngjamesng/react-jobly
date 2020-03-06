import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'
import Search from './Search.js'
import JobCard from './JobCard'
import JoblyApi from "./JoblyApi";
import UserContext from "./userContext";


function Jobs() {

  const [jobs, setJobs] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function getJobs() {
      const j = await JoblyApi.getJobs();
      setJobs(j);
    }
    getJobs();
  }, [user]);

  const handleApply = (id) => {
    const apply = async () => {
      const message = await JoblyApi.applyToJob(id)
      if (message) {
        const updatedUser = await JoblyApi.getUser(user.username)
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
      }
    }
    apply()
  }

  if (!user) return <Redirect to="/login" />

  const showJobs = () => (
    jobs.map(job => (
      <JobCard key={job.id} job={job} handleApply={handleApply} />
    ))
  )

  const search = async (term) => {
    setJobs(await JoblyApi.getJobs(term));
  }

  return (
    <div className="container">
      <h2 style={{margin: "30px auto"}}>List of Jobs</h2>
      <Search search={search}/>
      {jobs.length
      ? <div>{showJobs()}</div>
      : <h5>Sorry, no results were found.</h5>
      }
    </div>
  );
}


export default Jobs;
