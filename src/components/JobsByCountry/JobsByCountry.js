import React from "react";

import "./JobsByCountry.css";

import { Typography } from "@material-ui/core";
import JobsByCountryCard from "./JobsByCountryCard";

function JobsByCountry() {
  return (
    <>
      <div>
        <Typography className="jobsByCountry__title" variant="h2">
          Jobs By Country
        </Typography>
      </div>
      <div className="jobsByCountry">
        <JobsByCountryCard
          countryCode="AE"
          countryName="United Arab Emirates"
          jobs={300}
        />

        <JobsByCountryCard countryCode="BH" countryName="Bahrain" jobs={2300} />

        <JobsByCountryCard
          countryCode="SA"
          countryName="Saudi Arabia"
          jobs={400}
        />
      </div>
    </>
  );
}
export default JobsByCountry;
