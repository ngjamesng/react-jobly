import React, { useEffect, useState, useContext } from 'react';
import Search from './Search.js';
import CompanyCard from './CompanyCard';
import SkeletonCards from "./SkeletonCards";
import JoblyApi from "./JoblyApi";
import { Redirect } from "react-router-dom";
import UserContext from "./userContext";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getCompanies() {
      const c = await JoblyApi.getCompanies();
      setCompanies(c);
    }
    getCompanies();
  }, []);

  if (!user) return <Redirect to="/login" />

  const showCompanies = () => (
    companies.map(company => (
      <CompanyCard key={company.handle} company={company} companies={companies}/>
    ))
  )

  const search = async (term) =>{
    setCompanies(await JoblyApi.getCompanies(term));
  }
  return (
    <div className="container">
    <h2 style={{margin: "30px auto"}}>List of Companies</h2>
      <Search search={search}/>
      {companies.length
      ? <div>{showCompanies()}</div>
      : <SkeletonCards count={5}/>
      }
    </div>
  );
}

export default Companies;
