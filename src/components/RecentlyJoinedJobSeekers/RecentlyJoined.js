import React from "react";

import "./RecentlyJoined.css";

import Grid from "@material-ui/core/Grid";

import RecentlyJoinedCards from "./RecentlyJoinedCards";
import { Typography } from "@material-ui/core";
function RecentlyJoined() {
  return (
    <>
      <div>
        <Typography className="recentlyJoined__title" variant="h2">
          Recently Joined Jobseekers
        </Typography>
      </div>
      <div className="recentlyJoined">
        {/* Card of Trending Jobs */}
        <Grid container spacing={1}>
          <Grid container item xs={12} lg={3} md={6} sm={8}>
            <RecentlyJoinedCards
              avatarLetter={"D"}
              name={"David Hutson"}
              image={
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
              date={"January 19, 2019"}
              description={"Very talented and well behaved individual"}
            />
          </Grid>
          <Grid container item xs={12} lg={3} md={6} sm={8}>
            <RecentlyJoinedCards
              avatarLetter={"H"}
              name={"Helena Mitchell"}
              image={
                "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
              }
              date={"Febuary 19, 2020"}
              description={"Pretty, Hard worker, Enthusiastic and well bahaved"}
            />
          </Grid>
          <Grid container item xs={12} lg={3} md={6} sm={8}>
            <RecentlyJoinedCards
              avatarLetter={"P"}
              name={"Peter Hijacker"}
              image={"https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg"}
              date={"March 17, 2018"}
              description={
                "Brave, Artistic and Prompt, Experienced and skilled very!"
              }
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default RecentlyJoined;
