import React from "react";

import "./RecentlyJoinedCards.css";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[300],
  },
}));

function RecentlyJoinedCards({ avatarLetter, image, name, description, date }) {
  const classes = useStyles();

  return (
    <div className="recentlyJoinedCards">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label={name} className={classes.avatar}>
              {avatarLetter}
            </Avatar>
          }
          title={name}
          subheader={(`Joined, `, date)}
        />
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default RecentlyJoinedCards;
