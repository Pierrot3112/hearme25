import React from "react";

const ProgressBar = ({ progress, completed, total }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="progress-info">
        {completed}/{total} questions complétées
      </div>
    </div>
  );
};

export default ProgressBar;
