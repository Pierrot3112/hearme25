import React from "react";
import "./d.scss";
import SearchBar from "./SearchBar";
import Notification from "./Notification";

const Head = () => {
  return (
    <div className="head">
      <SearchBar />
      <Notification />
    </div>
  );
};

export default Head;
