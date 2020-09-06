import React from "react";

import "./JobsByCountryCard.css";
import ReactCountryFlag from "react-country-flag";

function JobsByCountryCard({ countryCode, countryName, jobs }) {
  return (
    <div className="jobsByCountryCard">
      <ReactCountryFlag
        className="jobsByCountryCard__flag"
        countryCode={countryCode}
        style={{
          fontSize: "2em",
          lineHeight: "2em",
        }}
        aria-label={countryName}
      />
      <div className="jobsByCountryCard__headings">
        <h3>{countryName}</h3>
        <p>{jobs} Jobs</p>
      </div>
    </div>
  );
}

export default JobsByCountryCard;
