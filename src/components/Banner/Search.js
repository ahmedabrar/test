import React from "react";
import { Button } from "@material-ui/core";

import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon />
        <input placeholder="Enter job/skill you are searching" />
        <Button variant="contained" color="" size="small">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Search;
