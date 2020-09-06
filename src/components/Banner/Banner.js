import React from "react";

import "./Banner.css";
import Search from "./Search";

function Banner() {
  return (
    <>
      <div className="banner__image"></div>
      <div className="banner">
        <div className="banner__title">
          <h1>Finding you the best jobs</h1>
        </div>
        <div className="banner__description">
          <p>This is a description Paragraph</p>
        </div>
        <div className="banner__search">
          <Search />
        </div>
        <div className="banner__link">
          <a href="some"> Employer? Post a Job</a>
        </div>

        {/* Background Image */}
        {/* H1 Title */}
        {/* P Tag Describtion */}
        {/* Search Component */}
        {/* Employers Link */}
      </div>
    </>
  );
}

export default Banner;
