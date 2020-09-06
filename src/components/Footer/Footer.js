import React from "react";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <h4>About OFWPro</h4>
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h6>
      </div>
      <div className="footer__center">
        <Grid container spacing={3}>
          <Grid container item xs={12} md={4} sm={6} spacing={3}>
            <h4>OFWPro</h4>
          </Grid>
          <Grid container item xs={12} md={4} sm={6} spacing={3}>
            <h4>Jobseekers</h4>
          </Grid>
          <Grid container item xs={12} md={4} sm={6} spacing={3}>
            <h4>Employers</h4>
          </Grid>
        </Grid>
      </div>
      <div className="footer__right">
        <h4>Follow Us</h4>
        <div className="footer__social">
          <TwitterIcon style={{ color: "#1DA1F2" }} />
          <FacebookIcon style={{ color: "#2867B2" }} />
          <LinkedInIcon style={{ color: "#4267B2" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
