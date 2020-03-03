import React from 'react';
import Search from './Search.js'
import CompanyCard from './CompanyCard'


function Companies() {
  return (
    <div>
      <h1>List of Companies</h1>
      <Search/>
      <CompanyCard/>
    </div>
  );
}

export default Companies;
