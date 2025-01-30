import React from "react";
import "./UserStyle/d.scss";
import Home from "./Home";
import Courses from "./Formation/Courses";
import Evaluation from "./Evaluation/Evaluation";
import Certification from "./Certification/Certification";

const Content = ({ activeMenu }) => {
  let content;

  switch (activeMenu) {
    case "home":
      content = <Home/>;
      break;
    case "courses":
      content = <Courses />;
      break;
    case "evaluation":
      content = <Evaluation />;
      break;
    case "certification":
      content = <Certification />;
      break;
  }

  return <div className="content">
    {content}
  </div>;
};

export default Content;
