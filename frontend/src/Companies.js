import React, { useEffect, useState } from 'react';
import Search from './Search.js';
import CompanyCard from './CompanyCard';
import JoblyApi from "./JoblyApi";
import { Redirect } from "react-router-dom";


function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const c = await JoblyApi.getCompanies();
      setCompanies(c);
    }
    getCompanies();
  }, []);

  if (!localStorage._token) return <Redirect to="/login" />

  const showCompanies = () => (
    companies.map(company => (
      <CompanyCard key={company.handle} company={company} companies={companies}/>
    ))
  )

  const search = async (term) =>{
    setCompanies(await JoblyApi.getCompanies(term));
  }
  return (
    <div>
      <h1>List of Companies</h1>
      <Search search={search}/>
      {showCompanies()}
    </div>
  );
}

export default Companies;
