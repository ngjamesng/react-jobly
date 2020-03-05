import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import "./CompanyCard.css";
import default_company_img from "./default_company_img.png"

// {handle, name, description, logo_url} 
function CompanyCard({ company }) {
  const { handle, name, description, logo_url } = company
  const history = useHistory();

  const handleClick = () => {
    history.push(`/companies/${handle}`);
  }

  function testFunc(evt){
    evt.target.src = default_company_img;
  }

  return (
    <section onClick={handleClick} className="card CompanyCard" >
      <div className="CompanyCard-NameImg">
        <h5 className="CompanyCard-Name">{name}</h5>
        <img src={logo_url} onError = {testFunc} alt={name} className="card-img-top Company-Img" />
      </div>
      <p className="CompanyCard-Description">{description}</p>
    </section>
  );
}

export default CompanyCard;