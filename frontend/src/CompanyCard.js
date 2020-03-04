import React from 'react';
import { useHistory } from "react-router-dom";
import Company from './Company';

// {handle, name, description, logo_url} 
function CompanyCard({ company }) {
  const { handle, name, description, logo_url } = company
  const history = useHistory();

  // TODO: STYLE!
  const imgStyle = { width: "100px" }

  const handleClick = () => {
    history.push(`/companies/${handle}`);
  }

  return (
    <div onClick={handleClick}>
      <h5>{name}</h5>
      <img src={logo_url} alt={name} style={imgStyle} />
      <p>{description}</p>
    </div>
  );
}

export default CompanyCard;

CompanyCard.defaultProps = {
  handle: "rithm",
  name: "Rithm School",
  description: "r14 has an awesome fridge",
  logo_url: "https://www.rithmschool.com/assets/logos/rithm_logo-0bbe0cba0becc168bb1ed46540bd26d6921d9f5194372128512268c203687780.svg"
}