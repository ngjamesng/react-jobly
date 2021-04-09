import React, { useState, useEffect, useContext } from 'react';
import JobCard from './JobCard';
import { useParams, Redirect } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import UserContext from "./userContext";
import Skeleton from "react-loading-skeleton";
import SkeleonCards from "./SkeletonCards";

function Company() {
  const { handle } = useParams();
  const [company, setCompany] = useState({ jobs: [] });
  const { user, setUser } = useContext(UserContext);
  
  useEffect(() => {
    async function getCompany() {
      const c = await JoblyApi.getCompany(handle);
      setCompany(c);
    }
    getCompany();
    
  }, [handle]);
  
  if (!user) return <Redirect to="/login" />

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

  const showJobs = () => (
    company.jobs.map(job => (
      <JobCard key={job.id} job={job} handleApply={handleApply} />
    ))
  );

  const SkeletonCompany = () => (
    <div className="container">
    <Skeleton style={{margin: "30px auto"}} height={50} width={300} />
    <Skeleton count={2} />
    <p>{company.description}</p>
    <SkeleonCards count={5}/>
  </div>
  )

  return (
    (!company.handle)
      ? <SkeletonCompany />
      : (
        <div className="container">
          <h2 style={{margin: "30px auto"}}>{company.name}</h2>
          <p>{company.description}</p>
          {showJobs()}
        </div>
      )
  );
}

export default Company;
