import React from "react";

const CircularProgressBar = ({ timeLeft, totalTime }) => {
  const radius = 20;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const timeSpent = totalTime - timeLeft;
  const progress = (timeSpent / totalTime) * 100;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <svg width={120} height={120} className="circular-progress-bar">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#ccc"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#FFD700"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="16">
        {Math.ceil(timeLeft / 60)}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
