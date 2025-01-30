import React from "react";
import "../UserStyle/d.scss";
import SearchBar from "./SearchBar";
import Notification from "./Notification";

const Head = () => {
  return (
    <div className="head">
      <SearchBar />
      <h1>HEARME</h1>
      <Notification />
    </div>
  );
};

export default Head;
