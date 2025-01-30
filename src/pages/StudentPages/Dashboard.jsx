import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./SideBar";
import "./UserStyle/d.scss";

import Home from "./Home";
import Courses from "./Formation/Courses";
import Evaluation from "./Evaluation/Evaluation";
import Certification from "./Certification/Certification";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;