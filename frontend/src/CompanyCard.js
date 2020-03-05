import React from 'react';
import { useHistory } from "react-router-dom";
import "./CompanyCard.css";
// {handle, name, description, logo_url} 
function CompanyCard({ company }) {
  const { handle, name, description, logo_url } = company
  const history = useHistory();

  const handleClick = () => {
    history.push(`/companies/${handle}`);
  }

  return (
    <section onClick={handleClick} className="card CompanyCard" >
      <div className="CompanyCard-NameImg">
        <h5>{name}</h5>
        <img src={logo_url} alt={name} className="card-img-top Company-Img" />
      </div>
      <p>{description}</p>
    </section>
  );
}

export default CompanyCard;

CompanyCard.defaultProps = {
  handle: "rithm",
  name: "Rithm School",
  description: "r14 has an awesome fridge",
  logo_url: "https://www.rithmschool.com/assets/logos/rithm_logo-0bbe0cba0becc168bb1ed46540bd26d6921d9f5194372128512268c203687780.svg"
}