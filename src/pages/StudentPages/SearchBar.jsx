import React from "react";
import "./d.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchIcon className="icon" />
      <input type="text" placeholder="Recherche" />
    </div>
  );
};

export default SearchBar;
