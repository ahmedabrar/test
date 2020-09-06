import React from "react";
// import {} = '@material-ui/core';
import { useHistory } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { Button } from "@material-ui/core";

import "./Header.css";

const Header = () => {
  let history = useHistory();

  return (
    <div className="header">
      {/* Left */}
      <div className="header__left">
        <img src="http://ofwpro.com/theme/assets/images/logo.png" alt="" />
      </div>
      {/* Center */}
      <div className="header__center">
        <div className="header__options">
          <HomeIcon />
          <p onClick={() => history.push("/")}>Home</p>
        </div>
        <div className="header__options">
          <SearchIcon />
          <p>Find Jobs</p>
        </div>
        <div className="header__options">
          <NoteAddIcon />
          <p>Create Your CV</p>
        </div>
      </div>
      {/* Right */}
      <div className="header__right">
        <div className="header__buttons">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => history.push("/user/login")}
          >
            Jobseeker Login
          </Button>
        </div>
        {/* <div className="header__buttons">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => history.push("/user/registration")}
          >
            Register
          </Button>
        </div> */}
        <div className="header__buttons">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => history.push("/employer/login")}
          >
            Employer Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
