import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BuildIcon from "@material-ui/icons/Build";
import "./TrendingJobsCard.css";

function TrendingJobsCard({ title, positions }) {
  return (
    <div className="trendingJobsCard">
      <Card className="trendingJobsCard__card" variant="outlined">
        <CardContent>
          <BuildIcon />
          <Typography className="trendingJobsCard__typo">{title}</Typography>
          <Typography
            className="trendingJobsCard__typo"
            variant="body2"
            component="p"
          >
            {positions}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="trendingJobsCard__button" size="small">
            Apply Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TrendingJobsCard;
