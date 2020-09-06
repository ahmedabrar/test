import React from "react";
import Grid from "@material-ui/core/Grid";

import "./Trending.css";
import TrendingJobsCard from "./TrendingJobsCard";
import { Typography } from "@material-ui/core";
function Trending() {
  return (
    <div className="trending">
      {/* Card of Trending Jobs */}
      <Typography className="trending__title" variant="h2">
        Trending Jobs
      </Typography>
      <Grid container spacing={1}>
        <Grid container item xs={12} md={4} sm={6} spacing={1}>
          <TrendingJobsCard title="Administration" positions={100} />
        </Grid>
        <Grid container item xs={12} md={4} sm={6} spacing={1}>
          <TrendingJobsCard title="Secratary" positions={199} />
        </Grid>
        <Grid container item xs={12} md={4} sm={6} spacing={1}>
          <TrendingJobsCard title="Receptionist" positions={298} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Trending;
